// Import Express module.
const express = require('express');

// Import Body-parser module, essential for handling POST request data.
const bodyParser = require('body-parser');

//  Initialize the Express server.
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// Required for Axios
app.use(bodyParser.json())


let PORT = process.env.PORT || 5001;

app.use(express.json());
// ! Set up the server to serve static files from 'server/public' directory.
app.use(express.static('server/public'));

// ! Global variable that will contain all of the
// ! calculation objects:
let calculations = []
console.log('This is the calculations storage array', calculations);


// ! Here's a wonderful place to make some routes:

// ! GET /calculations
app.get('/calculations', (req, res) => {

  // When creating an endpoint first do a console log.
  console.log("Request for GET calculations was made")

  // Responding will stop the code from running, similar to a return
  //res.sendStatus(200)
  res.send(calculations)
})


// ! POST /calculations
app.post('/calculations', (rec, res) => {

  console.log("POST recieved from client:", rec.body);// console log incoming inputs and operator
  console.log("addCalculation before push:", calculations);//console.log calculations before push 
  doCalculations(rec.body);//run the logic function that will do the calculating with inputs and operator.
  console.log("rec.body return:", rec.body);//console log the output of the logic function
  calculations.push(rec.body);//push the output into the  calculations array
  console.log("calculations after push:", calculations);//console log again to see that incoming guesses made it to addGuess
  res.sendStatus(201);//send http code for success back to client

})

function   doCalculations(input) {//run the logic function that will do the calculating with inputs and operator.(input) {
  console.log('doCalc is running',input)
  console.log("numOne", input.numOne);
  console.log("numTwo", input.numTwo);
  console.log("operator", input.operator);

  let x = input.numOne;
  let y = input.numTwo;
  let z = input.operator;
  console.log(x,y,z)
  switch (z) {
    case "+":
      input.result = parseInt(x) + parseInt(y)
      break;

    case "-":
      input.result = x - y
      break;

    case "*":
      input.result = x * y
      break;

    case "/":
      input.result = x/y
  }

  console.log("new", input);
  

}





// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5001 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5001;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
