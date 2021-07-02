export default class Scanner{
  constructor(templateStr){
    // 模板字符串本身
    this.templateStr = templateStr;
    // 当前指针位置
    this.pos = 0;
    // 剩余尾部字符串
    this.tail = templateStr;
  }

  // 扫描字符串，直至遇到指定标识符停止扫描，并返回当前扫描过的字符串
  ScannerUtil(endTag){
    let beginPos = this.pos;
    /**
     * 如果当前位置指针没有越界并且尾部字符串的第一位不是指定标识，则继续扫描,
     * 尾部字符串随之改变
     */
    while(!this.eos() && this.tail.indexOf(endTag)!=0){
      this.pos++;
      this.tail = this.templateStr.substr(this.pos);
    }
    return this.templateStr.substring(beginPos,this.pos)
  }

  // end of string 判断当前指针是否越界
  eos(){
    return this.pos>=this.templateStr.length;
  }

  // 如果遇到类似{{的标识符，需要跳过标识符扫描
  Cross(tag){
    if(this.tail.indexOf(tag)==0){
      // 如果尾部字符串的首位是指定标识，则当前指针跨过标识符长度
      this.pos += tag.length
      // 尾部字符串更新为字符串当前位置到末尾
      this.tail = this.templateStr.substr(this.pos)
    }
  }
}