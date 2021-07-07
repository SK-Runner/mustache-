import toTokens from './templateToTokens.js'
import toTemplate from './toTemplate.js'
window.MyMustache = {
  render(templateStr,data){
    // 模板字符串转化为tokens
    var tokens = toTokens(templateStr)
    console.log(tokens);
    // 数据注入
    var domStr = toTemplate(tokens,data)
    console.log(domStr);
    return domStr;
  }
}