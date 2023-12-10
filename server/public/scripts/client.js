function onReady(){
    console.log('client.js is sourced!');//is this thing on?
}

function handlerGetCaluculations() {
    axios({
        method: "GET",
        url: "/calculations"
    }).then((response)=> {
        console.log(' get is successful!!', response.data);
  
    })
    .catch((error) =>{
        console.log("server error :(", error);
  
    })
  }

function handlePostRequest(event) {
    console.log("handlePostSubmit has been clicked");

let numOne = document.getElementById('number1').value;
let numTwo = document.getElementById('number2').value;
let operator = document.getElementById('').value;
 

    axios({
    method: 'POST',
    url: './calculations',
    data: {
        numOne: 10,    // 👈 number
        numTwo: 5,     // 👈 number
        operator: '', // 👈 string
        }
})
.then((response) =>{
    console.log('successfully Added' )
})
.catch((error) =>{
    console.log('error', error)
    
})
};




