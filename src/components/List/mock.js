const Mock = require('mockjs')

const data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'tableData|10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    date: '@date',
    name: '@name',
    age: '@natural(18, 100)',
    state: '@pick(["正常","禁用"])',
    city: '@city',
    address: '@county(true)',
    zip: '@zip'
  }]
})

export default data.tableData
