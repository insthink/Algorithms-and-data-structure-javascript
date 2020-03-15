export default (str) => {
  const numMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  const charArr = str.split('')
  const codeArr = charArr.map(c => numMap[c])
  return combine(codeArr)
}

const combine = (codeArr) => {
  if (codeArr.length === 0) {
    return []
  }
  if (codeArr.length === 1 && typeof codeArr[0] === 'string') {
    return codeArr
  }
  let result = []
  for (let i = 0; i < codeArr[0].length; ++i) {
    for (let j = 0; j < codeArr[1].length; ++j) {
      result.push(`${codeArr[0][i]}${codeArr[1][j]}`)
    }
  }
  codeArr.splice(0, 2, result)
  if (codeArr.length > 1) {
    combine(codeArr)
  }
  return codeArr[0]
}
