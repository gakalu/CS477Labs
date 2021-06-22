const even=function(ele){
if(ele%2===0)
return true;
}
const odd=function(ele){
if(ele%2!==0)
return true;
}
Array.prototype.evenOddnum=function(){
    let evenNumbers=[];
    let oddNumbers=[];
    for(let i=0;i<this.length;i++){
        if(even(this[i])){
        evenNumbers.push(this[i]);
    }
    else if(odd(this[i])){
        oddNumbers.push(this[i]);
    }
}
return {evenNumbers,oddNumbers};
}
let arr=[1,2,3,4,5,6,7,8];
console.log(arr.evenOddnum());