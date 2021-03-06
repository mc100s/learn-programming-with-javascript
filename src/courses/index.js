/* eslint-disable */

// This line is import, otherwise you might have "ace is not defined"
import * as ace from 'brace';

const courseLinks = [
  'intro/intro-to-js',
  'basics/intro',
  'basics/comments',
  'basics/variables',
  'basics/variable-types',
  'basics/equality',
  'types/numbers',
  'types/strings',
  'types/arrays',
  'conditions/ifelse',
  'loops/for',
  'loops/while',
  'functions/intro',
  'conclusion/whats-next',
  // 'test',
]

export default courseLinks.map((link, i) => ({
  ...require('./' + link).default,
  slug: link,
  isNewPart: i === 0 || courseLinks[i - 1].substr(0, courseLinks[i - 1].indexOf('/')) !== courseLinks[i].substr(0, courseLinks[i].indexOf('/'))
}))