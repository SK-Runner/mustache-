export default class Scanner {
  constructor(templateStr){
    this.templateStr = templateStr
    this.pos = 0
    this.tail = templateStr
  }

  Scan(tag){
    if(this.tail.indexOf(tag)==0){
      this.pos += tag.length
      this.tail = this.templateStr.substr(this.pos)
    }
  }

  ScanUntil(endTag){
    // 记录本次执行时pos的初始值
    var pos_backup = this.pos
    while(!this.eos() && this.tail.indexOf(endTag)!=0){
      this.pos++
      this.tail = this.templateStr.substr(this.pos)
    }
    return this.templateStr.substring(pos_backup,this.pos)
  }

  // end of string 当前位置指针是否超过字符串长度
  eos(){
    return this.pos>=this.templateStr.length
  }
}