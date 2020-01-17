let board;
let karen = 'X';

let squares = document.querySelectorAll('.cell');
squares.forEach(function (squares) {
    squares.addEventListener("click", iClicked);
});

// const squareGrid = [
//     squares[0], squares[1], squares[2],
//     squares[3], squares[4], squares[5],
//     squares[6], squares[7], squares[8],
// ];

const winCombos = [
    [squares[0], squares[1], squares[2]],
    [squares[3], squares[4], squares[5]],
    [squares[6], squares[7], squares[8]],
    [squares[0], squares[3], squares[6]],
    [squares[1], squares[4], squares[7]],
    [squares[2], squares[5], squares[8]],
    [squares[0], squares[4], squares[8]],
    [squares[2], squares[4], squares[6]]
];

let moves = 0
// console.log(winCombos);

//making a mark of X or O

function iClicked(e) {
    moves++;

    if (e.target.textContent == 0) {
        e.target.textContent = karen;
        if (karen == 'X') {
            karen = 'O';
        } else {
            karen = 'X';
        }
    };

     if(moves > 2){
        checkSquares();
    }

};

//Add loop to go through winCombos - needs to check for 3 X's or 3 O's to find winner

let win = '';

function checkSquares() {
    for (let i = 0; i < winCombos.length; i++) {
        let combo = winCombos[i];
        let sum = 0;

        // console.log(winCombos[i])

        for (let j = 0; j < combo.length; j++) {
            //console.log(combo[j])

            if (combo[j].textContent === karen) {
                sum++
            }
            //console.log('sum =' + sum);
            if (sum === 3) {
                alert(`${combo[j].textContent} wins!`)
            }

        } 
    } 
};

function resetGame() {
    window.location.reload()
}

// function checkSquares(square1, square2, square3) {
//     if (square1 === square2 && square2 === square3) {
//             let square1 = 'X';
//             return true;
//             console.log('X wins!')
//         } else if (square1 === square2 && square2 === square3) {
//         let square1 = 'O';    
//         return true;
//         console.log('O wins!')
//         } else {
//             return false;
//         }
//     };

// checkSquares(winCombos);



//2D Array aka Array in an Array to check board

// let check = new Array (3);
// document.write("Creating Tic Tac Toe Board <br>");
// for (let i = 0; i < check.length; i++) {
//     check[i] = [];
// };
// let h = 0;
// let s = "GeeksforGeeks";
// for (let i = 0; i < 3; i++) {
//     for (let ji = 0; j < 3; j++) {
//         check[i][j] = s[h++];
//     }
// };
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j< 3; j++)
//     {
//         document.write(check[i][j] + " ");
//     }
//     document.write("<br");
// }




// let reset = document.querySelector('#reset-buttton').onclick = function () {
//     document.querySelectorAll('.cells').value = "";
// };

// let btn = document.querySelectorAll('#reset-button');
// btn.forEach(function(iReset){
//     btn.addEventListener("click",iReset);
// });
// function iReset(e) {
//     var yeet = document.getElementsByClassName('cell');
//     for (var i = 0; i < yeet.length; i++ ) {
//         yeet[i].innerHTML = ''
//     }
// };