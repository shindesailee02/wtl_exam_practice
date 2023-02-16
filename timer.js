
var s=function(a){
    console.log(a);
}
function r(b){
    console.log(b);
}
function t(c){
    console.log(c);
}


setImmediate(()=>{
    console.log(s(7));
})
setTimeout(()=>{
    console.log(r(6));
},450)

process.nextTick(t,8);
