# mona-lisa

JavaScript FP micro-toolkit.

# Why ?

FP JavaScript package are splitted into tons of contributors with different implementation.

This project is just a suite of a simple small toolkit, who can be use in conjuction with your favorite FP tools (like Ramda).

# Usage

```sh
npm i mona-lisa ramda --save
```

```js
const λ = require('./dist/bundle');
const R = require('ramda');

const eqZero = R.equals(0);
const justOne = λ.K(1);
const mult = x => y => x * y;
const sub = x => y => y - x;
const dec = sub(1);
const fact = λ.Y(f => R.ifElse(eqZero, justOne, λ.S(mult)(λ.B(f)(dec))));

console.log(fact(5) === 120);
```

# Monads

- Box (simple container).
- Coyoneda (compose across functor).
- Either (error handling with Left/Right).
- Monoid (with Sum, Product, Any, All, Max, Min, Pair, Fn).
- Custom (with daggy).

# Combinators

Name         | #     | [Haskell][] | [Ramda][]          | [Sanctuary][]          | Signature
------------:|-------|-------------|--------------------|------------------------|----------
identity     | **I** | `id`        | `identity`         | `I`                    | `a → a`
constant     | **K** | `const`     | `always`           | `K`                    | `a → b → a`
apply        | **A** | `($)`       | `call`             | `A`                    | `(a → b) → a → b`
thrush       | **T** | `(&)`       |                    | `T`                    | `a → (a → b) → b`
duplication  | **W** | `join`²     | `unnest`²          | `join`²                | `(a → a → b) → a → b`
flip         | **C** | `flip`      | `flip`             | `flip`                 | `(a → b → c) → b → a → c`
compose      | **B** | `(.)`       | `map`²             | `compose`, `map`²      | `(b → c) → (a → b) → a → c`
substitution | **S** | `ap`²       | `ap`²              | `ap`²                  | `(a → b → c) → (a → b) → a → c`
psi          | **P** | `on`        |                    | `on`                   | `(b → b → c) → (a → b) → a → a → c`
fix-point¹   | **Y** | `fix`       |                    |                        | `(a → a) → a`

-----

¹) In JavaScript and other non-lazy languages, it is impossible to implement the
  Y-combinator. Instead a variant known as the *applicative* or *strict*
  fix-point combinator is implemented. This variant is sometimes rererred to as
  the Z-combinator.

²) Algebras like `ap` have different implementations for different types.
  They work like Function combinators only for Function inputs.

[Haskell]: https://www.haskell.org/
[Ramda]: http://ramdajs.com/
[Sanctuary]: http://sanctuary.js.org/#combinator
