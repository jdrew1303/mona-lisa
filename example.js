const λ = require('./dist/bundle');
const R = require('ramda');

const eqZero = R.equals(0);
const justOne = λ.K(1);
const mult = x => y => x * y;
const sub = x => y => y - x;
const dec = sub(1);
const fact = λ.Y(f => R.ifElse(eqZero, justOne, λ.S(mult)(λ.B(f)(dec))));

console.log(fact(5) === 120);
