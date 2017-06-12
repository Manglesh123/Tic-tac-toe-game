var restart = document.querySelector('#b');

// Grab all the squares
var squares = document.querySelectorAll("td");


// Clear Squares Function
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
  }

}
restart.addEventListener('click',clearBoard)

//start game logic
function startGame(){
  this.textContent = 'X';    //1st turn for x as default
  this.winner = null;        //initialize winner as null
  setMessage(this.textContent + " get's to start");  //calling message function
}

//message function definition
function setMessage(msg){
  document.getElementById('message').innerText=msg;
}

//next move function
function nextMove(square){
  if (this.winner != null) {
    setMessage(this.textContent+" already won")
  }
  else if(square.innerText == ''){
    square.innerText = this.textContent;
    switchturn();
  }else {
    setMessage("Pick a another square");
  }
}


//function to swtch turn b/w X & O
function switchturn(){
  if (checkForWinner(this.textContent)) {
    setMessage("Congrats "+ this.textContent+", You Won!!");
    this.winner=this.textContent;
  }
else if(this.textContent==='X')
    {
      this.textContent='O';
      setMessage("It's " + this.textContent + "'s turn");
    }
  else{
    this.textContent='X'
    setMessage("It's " + this.textContent + "'s turn");
  }

}

//function to check the winner by all possiblity of checks
function checkForWinner(move){
  var result = false;
  if(checkRow(1,2,3,move)||
     checkRow(4,5,6,move)||
     checkRow(7,8,9,move)||
     checkRow(1,4,7,move)||
     checkRow(2,5,8,move)||
     checkRow(3,6,9,move)||
     checkRow(1,5,9,move)||
     checkRow(3,5,7,move)){
      result=true;
    }
    return result;
}

//function to check a row or column of same type
function checkRow(a,b,c,move){
 var result = false;
 if (getBox(a) == move && getBox(b) == move && getBox(c)==move){
   result=true;
 }
 return result;
}

//function for classifying each square 
function getBox(number){
  return document.getElementById('s'+ number).innerText;
}
