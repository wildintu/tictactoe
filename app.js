let board;
let karen = 'X';

let squares = document.querySelectorAll('.cell');
squares.forEach(function (squares) {
    squares.addEventListener("click", iClicked);
});

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

//console.log(winCombos);

//making a mark of X or O

function iClicked(e) {
    let saveKaren = '';
    saveKaren = karen;
    //console.log('e.target.textContent' + e.target.textContent);
    if (e.target.textContent == 0) {
        e.target.textContent = karen;
        console.log('e.target.textContent' + e.target.textContent);
        if (karen == 'X') {
            karen = 'O';
        } else {
            karen = 'X';
        }
    };
    //console.log('saveKaren' + saveKaren);
    checkWinner(saveKaren);

};

//checkSquares();
// //Add loop to go through winCombos - needs to check for 3 X's or 3 O's to find winner

// let win = '';

function checkWinner(karen) {
    if (checkHorizontal(karen) || checkVertical(karen) || checkDiagonal(karen)) {
        document.querySelector('#board').querySelector('#result').textContent = karen + ' wins!';
    }
    // for (let i = 0; i < winCombos.length; i++) {
    //     for (let j = 0; j < winCombos.length[i]; j++) {
//         if(checkHorizontal(karen) === checkVertical(karen) === checkDiagonal(karen)) {
//             return true;
//             console.log('win')
//         } else {
//             return false;
//         }
//     };
//   };
}


function checkHorizontal(karen) {
    //console.log('checkHorizontal'); 
    console.log('squares ' + squares[0].textContent);
    console.log('karen ' + karen);
    console.log('first square ' + (squares[0].textContent == karen));
    if ((squares[0].textContent == karen && squares[1].textContent == karen && squares[2].textContent == karen) ||
    (squares[3].textContent == karen && squares[4].textContent == karen && squares[5].textContent == karen) ||
    (squares[6].textContent == karen && squares[7].textContent == karen && squares[8].textContent == karen)) {    
        return true;
    } else {
        return false;
    }
}

function checkVertical(karen) {
    if ((squares[0].textContent == karen && squares[3].textContent == karen && squares[6].textContent == karen) ||
    (squares[1].textContent == karen && squares[4].textContent == karen && squares[7].textContent == karen) ||
    (squares[2].textContent == karen && squares[5].textContent == karen && squares[8].textContent == karen)) {
        return true;
    } else {
        return false;
    }
}

function checkDiagonal(karen) {
    if ((squares[0].textContent == karen && squares[4].textContent == karen && squares[8].textContent == karen) ||
    (squares[2].textContent == karen && squares[4].textContent == karen && squares[6].textContent == karen)) {
        return true;
    } else {
        return false;
    }
}


//reset the game board


function resetGame() {
    window.location.reload()
}