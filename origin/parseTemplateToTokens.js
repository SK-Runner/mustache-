import Scanner from './Scanner.js'
import nestTokens from './nestTokens.js'
export default function toTokens(templateStr){
  var tokens = []
  var scanner = new Scanner(templateStr)
  var words = ''
  while(!scanner.eos()){
    words = scanner.ScanUntil('{{')
    if(words!=''){
      tokens.push(['text',words])
    }
    scanner.Scan("{{")

    words = scanner.ScanUntil('}}')
    if(words!=''){
      if(words[0]=='#'){
        tokens.push(['#',words.substring(1)])
      }else if(words[0]=='/'){
        tokens.push(['/',words.substring(1)])
      }else{
        tokens.push(['name',words])
      }
    }
    scanner.Scan("}}")
  }
  return nestTokens(tokens)
}