import Custom from '../../Custom';
import { I, B } from '../../Combinators';

const Functor = Custom.tagged('x');

Functor.prototype.map = function(f) {
  return Functor(f(this.x));
};

Functor.prototype.inspect = function() {
  return `Functor(${this.x})`;
};

describe('#Functor', () => {
  it('should obey to identity law', () => {
    const a = Functor(1).map(I);
    const b = Functor(1);

    expect(a).toEqual(b);
  });

  it('should obey to composition law', () => {
    const inc = x => x + 1;
    const dbl = x => x * 2;
    const a = Functor(1).map(B(dbl)(inc));
    const b = Functor(4);

    expect(a).toEqual(b);
  });
});
