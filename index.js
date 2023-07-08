let arr = [] // 1 2 6 8
let guess = [] // 1 2 3 4
let a = 0;
numberGuess = 1

while (arr.length < 4) {
    let x = Math.floor(Math.random() * 9) + 1; // שרשור STRING
    if (!contains(arr, x)) {
        arr[a] = x;
        a++;
    }
}


document.getElementById("button").addEventListener("click", isClick);


function isClick() {
    let x = document.getElementById("input" + numberGuess).value;
    changeX(x);
    document.getElementById("damage" + numberGuess).innerHTML = damage().toString();
    document.getElementById("bool" + numberGuess).innerHTML = bull().toString()
    numberGuess++;
}

function changeX(x) {
    let y = x.toString();
    for (let i = 0; i < y.length; i++) {
        guess[i] = Number(y.charAt(i));
    }
}

function damage() {
    let count = 0;
    for (let i = 0; i < guess.length; i++) {
        if (contains(arr, guess[i])) {
            count++;
        }
    }
    return count;
}

for (let i = 0; i < 4; i++) {
    console.log(arr[i])
}

function contains(arr, x) { // [3,4,5,6] x = 8
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return true;
        }
    }
    return false;
}

function bull() {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == guess[i])
            x++;
    }
    return x;

}