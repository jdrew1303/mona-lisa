# mona-lisa

JavaScript FP micro-toolkit.

# Usage

```sh
npm i mona-lisa ramda --save
```

```js
const λ = require('mona-lisa');
const { equals, ifElse } = require('ramda');

const eqZero = equals(0);
const justOne = λ.K(1);
const mult = x => y => x * y;
const dec = x => x - 1;
const fact = λ.Y(f => ifElse(eqZero, justOne, λ.S(mult)(λ.B(f)(dec))));

console.log(fact(5) === 120);
```

# Monads

- IO
- Future
- Option
- State
- Reader
- Writer
- Either
- Validation
- Yoneda
- Coyoneda
- Free
- Cofree
- Trampoline
- Unit
- Tuple
- Tuple2
- Tuple3
- Tuple4
- Tuple5
- Custom

Custom is Fantasy Land daggy alias to create new type.

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

# Credits :

- Avaq : https://github.com/Avaq
- DrBoolean : https://github.com/DrBoolean
- FantasyLand : https://github.com/fantasyland

# Why ?

We want to program only using functions. ("functional programming" after all -FP).

Then, we have a first big problem. This is a program :

```
f(x) = 2 * x

g(x, y) = x / y
```

How can we say what is to be executed first ?

How can we form an ordered sequence of functions (i.e. a program) using no more than functions ?

**Solution :** compose functions. If you want first g and then f, just write f(g(x,y)). OK, but ...

**More problems :** some functions might fail (i.e. g(2, 0), divide by 0). We have no "exceptions" in FP. How do we solve it ?

**Solution :** Let's allow functions to return two kind of things : instead of having "g :: Real, Real -> Real" (function from two reals into a real), let's allow "g :: Real, Real -> Real | Nothing" (function from two reals into (real or nothing)). But functions should (to be simpler) return only one thing.

**Solution :** let's create a new type of data to be returned, a "boxing type" that encloses maybe a real or be simply nothing. Hence, we can have "g :: Real, Real -> Maybe Real".

OK, but ...

What happens now to f(g(x,y)) ? f is not ready to consume a Maybe Real ...

And, we don't want to change every function, we could connect with g to consume a Maybe Real.

**Solution :** let's have a special function to "connect" or "link" functions.

That way, we can, behind the scenes, adapt the output of one function to feed the following one.

In our case : g >>= f (connect g to f).

We want >>= to get g's output, inspect it and, in case it is Nothing just don't call f and return Nothing; or on the contrary, extract the boxed Real and feed f with it. (This algorithm is just the implementation of >>= for the Option type, commonly named Maybe type).

Many other problems arise which can be solved using this same pattern :
 
1. Use a "box" to codify/store different meanings/values, and have functions like g that return those "boxed values".
2. Have connecters/linkers g >>= f to help connecting g's output to f's input, so we don't have to change f at all.

Remarkable problems that can be solved using this technique are :

Having a global state that every function in the sequence of functions ("the program") can share : solution StateMonad.

We don't like "impure functions" : functions that yield different output for same input.

Therefore, let's mark those functions, making them to return a tagged/boxed value : IO monad.

Total happiness !
