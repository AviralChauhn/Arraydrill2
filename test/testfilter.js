const item = require("../data")
const filter=require("../filter")

const myfilter= filter(item,(data)=>{
    if(data%2==0){
        console.log(data)
    }
})