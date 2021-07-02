import lookup from './lookup.js'
import parseArray from './parseArray.js'
/**
 * 作用：将tokens数组转化为模板字符串
 */
export default function renderTemplate(tokens,data){
  var resultStr = ''
  for(var i=0; i<tokens.length; i++){
    var token = tokens[i]
    if(token[0] == 'text'){
      resultStr += token[1]
    }else if(token[0] == 'name'){
      resultStr += lookup(data,token[1])
    }else if(token[0] == '#'){
      resultStr += parseArray(token,data)
    }
  }
  return resultStr
}