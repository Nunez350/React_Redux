let test = async (x) => {
    let a = await new Promise((resolve)=>
                    setTimeout(() => {
                        resolve(Math.pow(x, 2));
                    }, 2000)); 
    return a;
}

test(5).then((data)=>{
    console.log(data);
})
