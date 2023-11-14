function reduce(items,cb,sv){
    let accumulator
    let index
    if(sv==undefined){
        accumulator=items[0]
    index=1
    }
    else{
        accumulator=sv
    index=0
    }
    for (index; index < items.length; index++) {
        accumulator=cb(accumulator,items[index])
    }
    return accumulator
}
module.exports=reduce;