function palindrome(str) {
    // let newStr = str.toLowerCase().replace(/(\W)|(\_)/g, "").split("")
    // for(let i = 0; i < newStr.length; i++) {
    //   if(newStr[i] !== newStr[newStr.length - 1 - i]) {
    //     return false
    //   } else {
    //     return true
    //   }
    // }
  
    let newStr = str.toLowerCase().replace(/(\W)|(\_)/g, "")
    let next = newStr.split('').reverse().join('')
    return newStr === next
  }
  
  console.log(palindrome("race car"))
  console.log(palindrome("almostomla"))