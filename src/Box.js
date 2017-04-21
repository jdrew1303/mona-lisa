const Box = x =>
  ({
    chain: f => f(x),
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`,
  });

export default Box;
