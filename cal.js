exports.add=function(a,b){
    return a+b;
}
exports.sub=function(a,b){
    console.log(a-b);
}

exports.type= function(s1,s2,s3){
    if(s1==s2 && s2==s3 && s3==s1){
        console.log("triangle equilateral aahe");
    }
    else if(s1==s2 || s2==s3||s3==4){
        console.log("isoceles");
    }
    else{
        console.log("It is a scalene triangle");
    }




}