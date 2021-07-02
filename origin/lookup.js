/**
 * 在dataObj对象中，用连续点符号的keyName属性
 * 比如 dataObj是
 * {
 *    a:{
 *      b:{
 *        c:100
 *      }
 *    }
 * }
 * lookup(dataObj,'a.b.c')返回100
 */
export default function lookup(dataObj,keyName){
  // 方括号不能识别 . 符号，所以需要拆分，然后层层寻找
  if(keyName.indexOf('.')!=-1 && keyName!='.'){
    var keys = keyName.split('.')
    // console.log("keys:",keys);
    var temp = dataObj
    for(var i=0; i<keys.length; i++){
      temp = temp[keys[i]]
    }
    return temp
  }
  // 如果没有 . 直接正常返回数据
  return dataObj[keyName]
}