document.addEventListener('DOMContentLoaded', function() {
    const choices = ['rock', 'paper', 'scissors'];
    const choiceImages = {
        rock: "../images/rockrock.png", 
        paper: "../images/paperpaper.png", 
        scissors: "../images/scissorscissor.png" 
    };

    let player1Score = 0;
    let player2Score = 0;

    const player1Image = document.getElementById('player1_img');
    const player1ScoreElem = document.getElementById('player1_score');
    const player2Image = document.getElementById('player2_img');
    const player2ScoreElem = document.getElementById('player2_score');
    const gameResult = document.getElementById('gameResult');
    const playButton = document.getElementById('playButton');

    function initializeGame() {
        player1Score = 0;
        player2Score = 0;
        updateScores();
        gameResult.textContent = '';
        playButton.disabled = false;
    }

    function updateScores() {
        player1ScoreElem.textContent = `Score: ${player1Score}`;
        player2ScoreElem.textContent = `Score: ${player2Score}`;
    }

    function getRandomChoice() {
        return choices[Math.floor(Math.random() * 3)];
    }

    function setPlayerImages(player1Choice, player2Choice) {
        player1Image.src = choiceImages[player1Choice];
        player2Image.src = choiceImages[player2Choice];
    }

    function determineWinner(player1Choice, player2Choice) {
        if (player1Choice === player2Choice) {
            return 'Draw';
        } else if (
            (player1Choice === 'rock' && player2Choice === 'scissors') ||
            (player1Choice === 'paper' && player2Choice === 'rock') ||
            (player1Choice === 'scissors' && player2Choice === 'paper')
        ) {
            return 'Player 1';
        } else {
            return 'Player 2';
        }
    }

    function playRound() {
        if (player1Score < 3 && player2Score < 3) {
            const player1Choice = getRandomChoice();
            const player2Choice = getRandomChoice();
            
            setPlayerImages(player1Choice, player2Choice);

            const result = determineWinner(player1Choice, player2Choice);
            if (result === 'Player 1') {
                player1Score++;
                gameResult.textContent = 'Player 1 wins this round!';
            } else if (result === 'Player 2') {
                player2Score++;
                gameResult.textContent = 'Player 2 wins this round!';
            } else {
                gameResult.textContent = 'It\'s a tie!';
            }

            updateScores();

            if (player1Score === 3) {
                gameResult.textContent = 'Player 1 wins the game!';
                
            } else if (player2Score === 3) {
                gameResult.textContent = 'Player 2 wins the game!';
                
            }
        }
    }













    
    playButton.addEventListener('click', playRound);

    
    initializeGame();
});
