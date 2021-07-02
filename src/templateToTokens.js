import Scanner from './Scanner.js'
import collapseToken from './Collapse.js'
export default function toTokens(templateStr){
  // 存储基本的tokens
  let tokens = [];
  let scanner = new Scanner(templateStr);
  let word = '';
  while(!scanner.eos()){
    // 遇到左双括号时
    word = scanner.ScannerUtil('{{');
    if(word!=''){
      tokens.push(['text',word]);
    }
    // 放入后跳过做双括号的扫描
    scanner.Cross("{{");

    // 遇到右双括号时
    word = scanner.ScannerUtil("}}");
    // 如果扫描出来的数据字段有标识，按照标识分类，push进tokens中
    if(word!=''){
      if(word[0]=='#'){
        tokens.push(['#',word.substr(1)])
      }else if(word[0]=='/'){
        tokens.push(['/',word.substr(1)])
      }else{
        tokens.push(['name',word])
      }
    }
    // 跳过右双括号
    scanner.Cross("}}");
  }
  // 折叠token
  return collapseToken(tokens)
}