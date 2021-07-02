// 作用：将变量（a 或者 a.b 或者 a.b.c）转化为相应具体数据
export default function inject(data,name){
  if(name.indexOf('.')!=-1 && name!='.'){
    // 以点为间隔拆分字符串为数组
    let nameArr = name.split('.');
    let index = data;
    for(let i=0 ; i<nameArr.length ; i++){
      // 注意：index初始值为data，每一次循环都会取index的某一子项并赋予自己
      index = index[nameArr[i]];
    }
    return index;
  }

  return data[name];
}