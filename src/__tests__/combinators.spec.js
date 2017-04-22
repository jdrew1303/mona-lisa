import { I, K, A, T, W, C, B, S, P, Y } from '../combinators';

const add = x => y => x + y;
const mult = x => y => x * y;
const eq0 = x => x === 0;
const ifElse = f => g => h => x => f(x) ? g(x) : h(x);
const concat = x => y => `${x}${y}`;
const dec = add(-1);
const inc = add(1);

describe('#I', () => {
  it('should obey to identity law', () => {
    expect(I(1)).toEqual(1);
  });
});

describe('#K', () => {
  it('should obey to constant law', () => {
    expect(K(1)).toBeInstanceOf(Function);
    expect(K(1)()).toEqual(1);
  });
});

describe('#A', () => {
  it('should obey to applicative law', () => {
    expect(A(inc)).toBeInstanceOf(Function);
    expect(A(inc)(1)).toEqual(2);
  });
});

describe('#T', () => {
  it('should obey to thrush law (inverse of applicative)', () => {
    expect(T(1)).toBeInstanceOf(Function);
    expect(T(1)(inc)).toEqual(2);
  });
});

describe('#W', () => {
  it('should obey to duplication law', () => {
    expect(W(add)).toBeInstanceOf(Function);
    expect(W(add)(2)).toEqual(4);
  });
});

describe('#C', () => {
  it('should obey to flip law', () => {
    expect(C(concat)).toBeInstanceOf(Function);
    expect(C(concat)('World')).toBeInstanceOf(Function);
    expect(C(concat)('World')('Hello')).toEqual('HelloWorld');
  });
});

describe('#B', () => {
  it('should obey to composition law', () => {
    expect(B(mult)).toBeInstanceOf(Function);
    expect(B(mult(3))(inc)).toBeInstanceOf(Function);
    expect(B(mult(3))(inc)(5)).toEqual(18);
  });
});

describe('#S', () => {
  it('should obey to substitution law', () => {
    expect(S(mult)).toBeInstanceOf(Function);
    expect(S(mult)(inc)).toBeInstanceOf(Function);
    expect(S(mult)(inc)(5)).toEqual(30);
  });
});

describe('#P', () => {
  it('should obey to PSI law', () => {
    expect(P(mult)).toBeInstanceOf(Function);
    expect(P(mult)(inc)).toBeInstanceOf(Function);
    expect(P(mult)(inc)(2)).toBeInstanceOf(Function);
    expect(P(mult)(inc)(2)(4)).toEqual(15);
  });
});

describe('#Y', () => {
  it('should obey to fix-point law', () => {
    const fact = Y(f => ifElse(eq0)(K(1))(S(mult)(B(f)(dec))));

    expect(fact).toBeInstanceOf(Function);
    expect(fact(5)).toEqual(120);
  });
});
