// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: '',
    aiHand: ''
}

const btnStart = document.querySelector('.start')
const hands = [...document.querySelectorAll('.select img')];

function handSelector() {
    game.playerHand = this.dataset.option;
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px red';
}

function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

function startGame() {
    if (!game.playerHand) {
        return alert('wybierz dlon!');
    }
    aiChoice();
}

hands.forEach(hand => {
    hand.addEventListener('click', handSelector)
});
document.querySelector('.start').addEventListener('click', startGame)