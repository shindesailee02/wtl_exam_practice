var os=require("os");
console.log(os.endianness());
console.log(os.platform());


var setint =setInterval(()=>{
    console.log("hello")
},500)
setTimeout(()=>{
    console.log("hello has been printed 10 times");
    clearInterval(setint);
},5500)