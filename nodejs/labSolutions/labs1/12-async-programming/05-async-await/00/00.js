let add =  function(x,y){
    return x + y;
}

console.log(add(4,3));
/**================================*/

let addAsync =  async function(x,y){
    return x + y;
}

addAsync(4,3).then((val)=>{
    console.log(val);
})

/** ===================================*/
let addAsync =  async(x,y) => {
    return x + y;
}

addAsync(4,3).then((val)=>{
    console.log(val);
})

