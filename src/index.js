import Box from './Box';
import Custom from './Custom';
import Coyoneda from './Coyoneda';
import Combinators from './Combinators';
import Either from './Either';
import Monoid from './Monoid';

// UMD interopt.
module.exports = {
  Box,
  Custom,
  Coyoneda,
  Either,
  ...Monoid,
  ...Combinators,
};
