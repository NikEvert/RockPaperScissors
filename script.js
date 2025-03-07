let userChoice;
let computerChoice;
let isWinner = false;

while (!isWinner) {
    userChoice = prompt('Введите значение: камень, ножницы, бумага');
    userChoice = userChoice.toLowerCase();

    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        computerChoice = 'камень';
    } else if (randomNum === 1) {
        computerChoice = 'ножницы';
    } else if (randomNum === 2) {
        computerChoice = 'бумага';
    }


    if (userChoice === 'камень' || userChoice === 'ножницы' || userChoice === 'бумага') {
        alert(`Компьютер выбрал: ${computerChoice}`);

        if (userChoice === computerChoice) {
            alert('Ничья! Играем дальше');
        } else if ((userChoice === 'камень' && computerChoice === 'ножницы') ||
            (userChoice === 'бумага' && computerChoice === 'камень') ||
            (userChoice === 'ножницы' && computerChoice === 'бумага')
        ) {
            alert('Ты выиграл!');
            isWinner = true;
        } else {
            alert('Компьютер выиграл!');
            isWinner = true;
        }
    } else {
        alert('Введите корректное значение: \'камень\', \'ножницы\' или \'бумага\'');
    }
}


