function flatten(items){
    let emparr=[];
    for (let index = 0; index < items.length; index++) {
        if(Array.isArray(items[index])){
            emparr.concat(flatten(items[index]))
        }
        else{
            emparr.push(items[index])
        }
    }
    return emparr;
}
module.exports=flatten