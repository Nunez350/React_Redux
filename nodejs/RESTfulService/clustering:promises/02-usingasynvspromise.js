
// function square(x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//         resolve(Math.pow(x,2));
//         },2000);
//     });
// }


// async function layer(x){
//     const value = await square(x);
//     console.log(value);
// }

// layer(10);



// async function square(x) {
//     let re =  setTimeout(() => {
//         resolve(Math.pow(x,2));
//         },2000);
    
     
    
// }
// square(10).then((data) => {
//     console.log(data);
// })



let test = async (x) => {
    let a = await new Promise((resolve) => setTimeout(()=>{
        resolve(Math.pow(x,2));
    },2000));
    return a;
}



test(5).then((data)=> {
    console.log(data);
})





let addAsync =  async(x,y) => {
    return x+y;
}

addAsync(4,3).then((val)=> {
    console.log(val);
})

// async function square(x) {
//     let re =  setTimeout(() => {
//         resolve(Math.pow(x,2));
//         },2000);
    
     
    
// }
// square(10).then(data => {
//     console.log(data);
// })





// function fun1(req, res){
//     return request.get('http://localhost:3000')
//      .catch((err) =>{
//        console.log('found error');
//   }).then((res) =>{
//      console.log('get request returned.');
//   });


//   async function fun1(req, res){
//     let response = await request.get('http://localhost:3000');
//       if (response.err) { console.log('error');}
//       else { console.log('fetched response');
//   }