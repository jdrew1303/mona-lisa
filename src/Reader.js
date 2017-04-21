import Custom from './Custom';
import { I, C } from './Combinators';

const Reader = daggy.tagged('run');

// Methods
Reader.of = (a) => Reader(C(a));

Reader.ask = Reader(I);

Reader.prototype.chain = function(f) {
  return Reader((e) => f(this.run(e)).run(e));
};

// Derived
Reader.prototype.map = function(f) {
  return this.chain((a) => Reader.of(f(a)));
};

Reader.prototype.ap = function(a) {
  return this.chain((f) => a.map(f));
};

// Transformer
Reader.ReaderT = (M) => {
  const ReaderT = daggy.tagged('run');

  ReaderT.lift = (m) => ReaderT(constant(m));

  ReaderT.of = (a) => {
    return ReaderT((e) => M.of(a));
  };

  ReaderT.ask = ReaderT((e) => M.of(e));

  ReaderT.prototype.chain = function(f) {
    return ReaderT((e) => {
      return this.run(e).chain((a) => f(a).run(e));
    });
  };

  ReaderT.prototype.map = function(f) {
    return this.chain((a) => ReaderT.of(f(a)))
  };

  ReaderT.prototype.ap = function(a) {
    return this.chain((f) => a.map(f));
  };

  return ReaderT;
};
