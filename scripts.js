
//select all the boxes methode 
const boxes = document.querySelectorAll(".box");

const restart = document.getElementById("restart");

const O = "O";
const X = "X";
let currentPlayer = O;

//creat a board array to keep track of our input , to prevent repeat
const board = new Array(9).fill(null);


//creating funktion wenn clicken on the boxes
const boxClicked = (e) => {
    const id = e.target.id;

    // condition of the array 
    if (!board[id]) {
        board[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        //chek lines funktion and end game 
        if (checkLine()) {
            endGame();
        }

        // if we have a draw= no winner (draw here is a parameter)
        if (!board.some((e) => e === null)) endGame("draw");



        //Condition true or false
        //other  option o write the code currentPlayer = (currentPlayer === O)? X: O;
        if (currentPlayer === O)
            currentPlayer = X
        else {
            currentPlayer = O
        }
    }
    console.log(board);
};
const endGame = (result) => {
    intro.innerText = result == "draw" ? "Draw!" : currentPlayer + " has Won!";

    // add funktion to end the game 
    boxes.forEach((box) => box.removeEventListener("click", boxClicked));

};

// restart funktion
const restartGame = () => {
    currentPlayer = O;
    board.fill(null);
    boxes.forEach((box) => {
        box.innerText = "";
    });
    intro.innerText = "Lets Play!";
    boxes.forEach((box) => box.addEventListener("click", boxClicked));
};


const checkLine = () => {
    /*winning compinations 
    0,1,2
    3.4.5
    6.7.8
    0,3,6
    1,4,7
    2,5,8
    0,4,8
    2,4,6 */
    // top line = [0,1,2] X 
    if (currentPlayer == board[0] && board[0] == board[1] && board[1] == board[2])
        return true;

    // middel  line = [3,4,5] X 
    if (currentPlayer == board[3] && board[3] == board[4] && board[3] == board[5])
        return true;

    // botttom line = [6,7,8] 
    if (currentPlayer == board[6] && board[6] == board[7] && board[6] == board[8])
        return true;

    // left column = [0,3,6] 
    if (currentPlayer == board[0] && board[0] == board[3] && board[0] == board[6])
        return true;

    // middel column = [1,4,7] 
    if (currentPlayer == board[1] && board[1] == board[4] && board[1] == board[7])
        return true;

    // right column = [2,5,8] 
    if (currentPlayer == board[2] && board[2] == board[5] && board[2] == board[8])
        return true;

    // slash diagonal  = [0,4,8] 
    if (currentPlayer == board[0] && board[0] == board[4] && board[0] == board[8])
        return true;

    // backslash diagonal = [2,6,4] 
    if (currentPlayer == board[2] && board[2] == board[4] && board[2] == board[6])
        return true;

    return false;
};







//calling funktion wenn clicken on the boxes
boxes.forEach((box) => box.addEventListener("click", boxClicked));

// add button restart funktion
restart.addEventListener("click", restartGame);