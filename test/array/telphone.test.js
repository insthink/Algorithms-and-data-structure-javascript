import letterCombine from '../../code/array/telphone'

test('tel: 23', () => {
  expect(letterCombine('23'))
    .toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})

test('tel: 234', () => {
  expect(letterCombine('234'))
    .toEqual([
      'adg', 'adh', 'adi',
      'aeg', 'aeh', 'aei',
      'afg', 'afh', 'afi',
      'bdg', 'bdh', 'bdi',
      'beg', 'beh', 'bei',
      'bfg', 'bfh', 'bfi',
      'cdg', 'cdh', 'cdi',
      'ceg', 'ceh', 'cei',
      'cfg', 'cfh', 'cfi'
    ])
})
