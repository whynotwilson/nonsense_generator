/* eslint-disable space-before-function-paren */
// eslint-disable-next-line camelcase
function nonsense_generator(jobs) {
  // 隨機取出一個 index
  function randomIndex(arr) {
    const len = arr.length
    return Math.floor(Math.random() * len)
  }

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  let sentance = '身為一個'
  if (jobs === 'engineer') {
    sentance += '工程師，' + task.engineer[randomIndex(task.engineer)]
  } else if (jobs === 'designer') {
    sentance += '設計師，' + task.designer[randomIndex(task.designer)]
  } else if (jobs === 'founder') {
    sentance += '創業家，' + task.entrepreneur[randomIndex(task.entrepreneur)]
  } else {
    return '請先選擇職業'
  }

  sentance += '，' + phrase[randomIndex(phrase)] + '吧！'
  return sentance
}

// eslint-disable-next-line camelcase
module.exports = nonsense_generator

// let jobs = 'designer'
// console.log(nonsense_generator(jobs))
