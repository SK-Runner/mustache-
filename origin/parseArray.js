import lookup from './lookup.js'
import renderTemplate from './renderTemplate.js'
/**
 * 处理数组，结合renderTemplate实现递归
 * 注意：参数收的是token，而不是tokens
 * token是最简单的['#','students',[]]
 */
export default function parseArray(token,data){
  // 获取数组要使用那部分data
  var v = lookup(data,token[1])
  var resultStr = ''
  for(var i=0; i<v.length; i++){
    // 为了适应普通数组遍历，需要补一个.属性
    resultStr += renderTemplate(token[2],{
      // 为了适应普通数组的遍历，所以需要使用...运算符拼接
      ...v[i],
      // 普通数组在html中可以使用{{.}}表示数组数据
      '.':v[i]
    })
  }
  return resultStr
}