// 作用：将tokens中的'#'项折叠
export default function collapseToken(tokens){
  // 定义结果数组
  let resultArr = [];
  // 定义栈数组
  let stacks = [];
  // 定义收集器数组，默认为结果数组
  let collection = resultArr;

  let tokenLength = tokens.length;

  for(let i=0 ; i <tokenLength ; i++){
    let token = tokens[i]

    switch(token[0]){
      case '#':
        // 遇到开始标识，入栈、收集器收集该项，收集器收集后指向该项下标为2的空数组
        collection.push(token)
        stacks.push(token)
        collection = token[2] = []
      break;

      case '/':
        // 遇到结束标识则出栈
        stacks.pop()
        // 收集器指向栈中倒数第一个元素下标为2的数组，如果栈为空，指向结果数组
        collection = stacks.length > 0 ? stacks[stacks.length-1][2] : resultArr
      break;

      default:
        // 无需注意是结果数组还是某个token下标为2的数组，直接push即可，数组的指向由上方case指定。
        collection.push(token)
    }
  }
  return resultArr
}