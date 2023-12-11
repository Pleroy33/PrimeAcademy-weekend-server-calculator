//const { eventNames } = require("../../server");

function onReady() {
    console.log('client.js is sourced!');//is this thing on?
}
onReady();

let operator= "+"
function handlerGetCaluculations() {
    console.log('inside get calc handler');
    axios({
        method: "GET",
        url: "/calculations"
    }).then((response) => {
        console.log(' get is successful!!', response.data);
        console.log(Object.values(response.data));
        const recent =document.getElementById('recentResult')
        recent.innerHTML+= `<ul>${ JSON.stringify(Object.values(response.data[response.data.length-1]))}</ul>`

        const history = document.getElementById('resultHistory') 
        history.innerHTML += `<ul>${ JSON.stringify(Object.values(response.data))}</ul>`
    })
        .catch((error) => {
            console.log("server error :(", error);

        })

}
handlerGetCaluculations();
function handlePostCalculations(event) {
    event.preventDefault();
    console.log("handlePostSubmit has been clicked");
    //const data = new FormData(event.target);
    //let x = data.get("firstNum");
    //console.log(data);
    let numOne = document.getElementById('firstNum').value;
    let numTwo = document.getElementById('secondNum').value;
    console.log('operator', operator)
    console.log(numOne, numTwo, operator)
    axios({
        method: 'POST',
        url: './calculations',
        data: {
            numOne: numOne,   // 👈 number
            numTwo: numTwo,     // 👈 number
            operator: operator // 👈 string
        }
    })
        .then((response) => {
            console.log('successfully Added');
            handlerGetCaluculations();
        })
        .catch((error) => {
            console.log('error', error)

        })
};

function chooseOperator(input) {
    event.preventDefault()
    if(input === 'plus') {
        console.log("plus");
        operator = "+"
        console.log(operator)
        
    }
    else if (input === 'minus') {
        console.log('minus');
        operator = '-';
        console.log(operator)

        
    }
    else if (input === 'multiply') {
        console.log('multiply');
        operator = '*';
        console.log(operator)
        
    } else if (input === 'divide') {
        console.log('divide');
        operator = '/';
        console.log(operator)
        
    }
    console.log(operator)
}

console.log(operator)







