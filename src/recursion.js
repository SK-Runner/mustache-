import inject from './inject.js'
import toTemplate from './toTemplate.js'
export default function recursion(data,token){
  // 获取循环数据，该数据的长度可以确定循环次数
  let neededData = inject(data,token[1]);
  // 定义结果数组，存储循环出的结果字符串
  let resultStr = '';
  for(let i=0 ; i<neededData.length ; i++){
    // 递归思想，对于token就应该使用toTemplate转化为模板字符串
    resultStr += toTemplate(token[2],{
      // 将本次循环数据注入到模板字符串中
      ...neededData[i],
      // 如果html结构中有{{.}}，则需要增加定义一个名为'.'的变量以适配数据
      '.':neededData[i]
    });
  }
  return resultStr;
}