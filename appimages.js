let board;
let karen = 'POGROO';
let pogroo = 'pogroo.png';
let babyyoda = 'babyyoda.png';

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
    if (!document.querySelector('#board').querySelector('#result').textContent.endsWith(' WINS!')) {
        let saveKaren = '';
        saveKaren = karen;
        //console.log('e.target.textContent' + e.target.textContent);
        if (e.target.textContent == 0) {
            // e.target.style.background = `url(${pogroo}) no-repeat`;
            // e.target.style.backgroundSize = 'cover';
            e.target.textContent = karen;
            //console.log('e.target.textContent' + e.target.textContent);
            if (karen == 'POGROO') {
                karen = 'BABY YODA';
                e.target.style.background = `url(${pogroo}) no-repeat`;
                e.target.style.backgroundSize = 'cover';
                jump.play();
            } else {
                karen = 'POGROO';
                e.target.style.background = `url(${babyyoda}) no-repeat`;
                e.target.style.backgroundSize = 'cover';
                cutepurr.play();
            }
        }
        console.log(saveKaren)
        //console.log('saveKaren' + saveKaren);
        //console.log('checkDraw' + checkDraw(saveKaren));
        checkWinner(saveKaren);
        checkDraw();
    }
};

// check for the winner
function checkWinner(karen) {
    if (checkHorizontal(karen) || checkVertical(karen) || checkDiagonal(karen)) {
        document.querySelector('#board').querySelector('#result').textContent = karen + ' WINS!';
        return;
        // } else {
        //       document.querySelector('#board').querySelector('#result').textContent = 'No winners!'
    }
};



//check horizontal rows for winner
function checkHorizontal(karen) {
    //console.log('checkHorizontal'); 
    //console.log('squares ' + squares[0].textContent);
    //console.log('karen ' + karen);
    //console.log('first square ' + (squares[0].textContent == karen));
    if ((squares[0].textContent == karen && squares[1].textContent == karen && squares[2].textContent == karen) ||
        (squares[3].textContent == karen && squares[4].textContent == karen && squares[5].textContent == karen) ||
        (squares[6].textContent == karen && squares[7].textContent == karen && squares[8].textContent == karen)) {
        return true;
    } else {
        return false;
    }
};

//check vertical row for winner
function checkVertical(karen) {
    if ((squares[0].textContent == karen && squares[3].textContent == karen && squares[6].textContent == karen) ||
        (squares[1].textContent == karen && squares[4].textContent == karen && squares[7].textContent == karen) ||
        (squares[2].textContent == karen && squares[5].textContent == karen && squares[8].textContent == karen)) {
        return true;
    } else {
        return false;
    }
};

//check diagonal row for winner
function checkDiagonal(karen) {
    if ((squares[0].textContent == karen && squares[4].textContent == karen && squares[8].textContent == karen) ||
        (squares[2].textContent == karen && squares[4].textContent == karen && squares[6].textContent == karen)) {
        return true;
    } else {
        return false;
    }
};

//check for a draw after all cells have mark
function checkDraw() {
    let draw = 0;
    if (!document.querySelector('#board').querySelector('#result').textContent.endsWith(' WINS!')) {
        for (i = 0; i < 9; i++) {
            //console.log(squares[i].textContent);
            if (squares[i].textContent != '') {
                //console.log(draw);
                draw++;
            }
        }
    }
    if (draw == 9) {
        document.querySelector('#board').querySelector('#result').textContent = 'NO WINNERS!';
    }
};


//reset the game board


function resetGame() {
    window.location.reload()
};