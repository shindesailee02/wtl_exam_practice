const prompt=require("prompt-sync")();
var num=parseInt(prompt("please enter a number"));
let n1=0,n2=1,nextterm;
for(i=0;i<num;i++){
    console.log(n1)
    nextterm=n1+n2
    n1=n2;
    n2=nextterm;

}