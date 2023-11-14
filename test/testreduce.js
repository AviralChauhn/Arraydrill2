const reduce=require("../reduce")
const items=require("../data")

const myreduce=reduce(items,(data,acc)=>{
    return data+acc;
},0)
console.log(myreduce);