function makeMove(playerMove) {
    var moves = ['Pedra', 'Papel', 'Tesoura'];
    var machineMove = Math.floor(Math.random() * 3) + 1;
    var resultMessage = '';

    var playerChoice = moves[playerMove - 1];
    var machineChoice = moves[machineMove - 1];

    document.getElementById('player-choice').innerHTML = `<img src="imagens/${playerChoice}.png" alt="${playerChoice}" class="choice-image">`;
    document.getElementById('machine-choice').innerHTML = `<img src="imagens/${machineChoice}.png" alt="${machineChoice}" class="choice-image">`;

    if (playerMove === machineMove) {
        resultMessage = 'Empate!';
        document.getElementById('resultImage').src = 'imagens/Empate.png';
    } else if ((playerMove === 1 && machineMove === 3) ||
               (playerMove === 2 && machineMove === 1) ||
               (playerMove === 3 && machineMove === 2)) {
        resultMessage = 'Você ganhou!';
        document.getElementById('resultImage').src = 'imagens/VoceGanhou.png';
    } else {
        resultMessage = 'Você perdeu!';
        document.getElementById('resultImage').src = 'imagens/VocePerdeu.png';
    }

    document.getElementById('resultText').innerText = resultMessage;
    document.querySelector('.result').classList.add('show');
}
