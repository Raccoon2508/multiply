module.exports = function multiply(first, second) {


  function multy(num,dig){ //умножение числа a на однозначное число b
    let result=[];
    let temp=0;
    for(let i=num.length-1; i>=0; i--){
    result.unshift((temp+num[i]*dig)%10);
    temp=Math.floor((temp+num[i]*dig)/10);
   
    if(i==0&&temp!=0){
      
      result.unshift(temp);
      }
    }
      
     return result;
  }
  
  function summ(firstArr,secondArr){
  let templ=0;
  
  let firstRev=firstArr.reverse();
  let secondRev=secondArr.reverse();
  let firstLen=firstRev.length;
  let secondLen=secondRev.length;
  let maxLen;
  let result=[];
  
  if(firstLen>secondLen){
    maxLen=firstLen;
    }else{
    maxLen=secondLen;  
    }
  
  for(let i=0; i<=maxLen;i++){
    let a;
    let b;
    
    if(!firstRev[i]){a=0;}
    else{a=firstRev[i]};
    
    if(!secondRev[i]){b=0;}
    else{b=secondRev[i]};
    
    
    result.push((a+b+templ)%10);
    templ=Math.floor((a+b+templ)/10);
    
    if(templ==0&&i==(maxLen-1)){
      break;
      }
    
    }
    return result.reverse();
}
    
    
  if(first.length>=second.length){
    longestNumlength=first.length;
    shortestNumLength=second.length;
    firstFactor=first;
    secondFactor=second;
    }else{
    longestNumlength=second.length;
    shortestNumLength=first.length;
    firstFactor=second;
    secondFactor=first;
    }
  
 
    
  let multPreResult=multy(firstFactor,secondFactor[secondFactor.length-1]); //вычисление результата умножения первого множителя на последнюю цифру второго множителя
 
  
  let count=0; //счетчик нулей, добавляемых при повышении порядка цифры второго множителя
  for(let j=shortestNumLength-2;j>=0;j--){  
    
        mult=multy(firstFactor,secondFactor[j]);
  
   
  
  for(let k=0; k<=count;++k){ //цикл добавления нулей в массив результата умножения при повышении порядка второго множителя
    mult.push(0);
    
    }
  count++;
  
  
  multPreResult=summ(mult,multPreResult);
  
 
 
 
  }
 
  return  multPreResult.join('');
  }
