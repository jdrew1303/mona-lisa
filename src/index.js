import Cofree from 'fantasy-cofrees';
import Either from 'fantasy-eithers';
import Free from 'fantasy-frees';
import IO from 'fantasy-io';
import Reader from 'fantasy-readers';
import State from 'fantasy-states';
import Validation from 'fantasy-validations';
import Writer from 'fantasy-writers';
import Options from 'fantasy-options';
import Future from 'fluture';
import Custom from 'daggy';

import Combinators from './combinators';

// UMD interopt.
module.exports = {
  Cofree,
  Either,
  Free,
  IO,
  Reader,
  State,
  Validation,
  Writer,
  Options,
  Future,
  Custom,
  ...Free,
  ...Combinators,
};
