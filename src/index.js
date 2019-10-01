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
  
  function summ(firstArr,secondArr){ //сложение двух результатов умножения в форме массивов по правилу сложения в столбик с разницей в 1 порядок
    
    let result=[];
    let temp=0;
    let shotestArrLength=0;
    
    
    let firstArrRev=firstArr.reverse();
    let secondArrRev=secondArr.reverse();
    
    if(firstArr.length<secondArr.length){
      shotestArrLength=firstArr.length;
      longestArrLength=secondArr.length;
      result=secondArrRev;
    }else if(firstArr.length==secondArr.length){
      shotestArrLength=secondArr.length;  
      longestArrLength=firstArr.length;
      result=firstArrRev;
    }else{
      shotestArrLength=secondArr.length;
      longestArrLength=firstArr.length;
      result=firstArr;
    }
    
    for(let i=0; i<shotestArrLength; i++){
        let item=(firstArrRev[i]+secondArrRev[i]+temp)%10;
        temp=Math.floor((firstArrRev[i]+secondArrRev[i]+temp)/10);
        result[i]=item;
          if(i==shotestArrLength-1&&temp!=0){
          
          if(result[i+1]){
          for(let j=i+1; j<longestArrLength;j++){
            item=(result[j]+temp)%10;
            temp=Math.floor((result[j]+temp)/10);
            result[j]=item;
            if(j==longestArrLength-1&&temp!=0){
              result.push(temp);
              
              }}
          }else{
          result.push(temp)
          }
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