function flickSwitch(arr){
  let flag = true
  return arr.map(el => {
    if(el === 'flick') flag = !flag
    return flag
  })
}