export const I = x => x;
export const K = x => y => x;
export const A = f => x => f(x);
export const T = x => f => f(x);
export const W = f => x => f(x)(x);
export const C = f => y => x => f(x)(y);
export const B = f => g => x => f(g(x));
export const S = f => g => x => f(x)(g(x));
export const P = f => g => x => y => f(g(x))(g(y));
export const Y = f => (g => g(g))(g => f(x => g(g)(x)));

export default {
  I,
  K,
  A,
  T,
  W,
  C,
  B,
  S,
  P,
  Y,
};
