/* 
    函数的功能是折叠tokens，将#和/之间的tokens能够整合起来，作为它的下标为2的项
*/
export default function nestTokens(tokens){
  // 定义结果数组
  var nestTokens = []
  // 定义栈
  var sections = []
  // 定义收集器数组，收集器数组初始指向结果数组nestTokens，遇到#指向该数组下标为2的数组
  var collector = nestTokens

  for(var i=0; i<tokens.length; i++){
    var token = tokens[i]
    switch(token[0]){
      case '#':
        // 初次遇到#号，collector首次指向结果数组，所以理应将该项push
        collector.push(token)
        // 栈中自始至终只存放#项
        sections.push(token)
        // 改变收集器为#号项下标为2的空数组，后续收集其子元素
        collector = token[2] = []
        break;
      
      case '/':
        // 遇到子嵌套结束标志，该子元素出栈
        sections.pop()
        // collector指向栈顶数组(该子元素的第一父元素)的第二项，如果以后还有栈顶数组的子元素，则在default中继续push
        collector = sections.length>0 ? sections[sections.length-1][2] : nestTokens
        break;

      default:
        // 无需注意是结果数组还是某个token下标为2的数组，直接push即可，数组的指向由上方case指定。
        collector.push(token)
    }
  }
  return nestTokens
}