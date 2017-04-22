import { I, K, A, T, W, C, B } from '../combinators';

const add = x => y => x + y;
const mult = x => y => x * y;
const inc = add(1);
const concat = x => y => `${x}${y}`;

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
    expect(B(inc)).toBeInstanceOf(Function);
    expect(B(mult(3))(inc)).toBeInstanceOf(Function);
    expect(B(mult(3))(inc)(5)).toEqual(18);
  });
});
