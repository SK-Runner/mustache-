import inject from './inject.js'
import recursion from './recursion.js'
// 作用：将tokens转化为模板字符串并结合数据
export default function toTemplate(tokens,data){
  let resultStr = '';
  let tokenLength = tokens.length;
  for(let i=0 ; i<tokenLength ; i++){
    if(tokens[i][0]=='text'){
      // 文本直接添加到结果字符串中
      resultStr += tokens[i][1]
    }
    if(tokens[i][0]=='name'){
      // 注入数据并返回
      resultStr += inject(data,tokens[i][1])
    }
    if(tokens[i][0]=='#'){
      // 递归方法处理循环结构
      resultStr += recursion(data,tokens[i])
    }
  }
  return resultStr;
}