//Jscript goes here
            var randomNumber = Math.floor(Math.random() * 99) + 1;
            var guesses = document.querySelector('#guesses');
            var lastResult = document.querySelector('#lastResult');
            var lowOrHi = document.querySelector('#lowOrHi');
            
            var guessSubmit = document.querySelector('.guessSubmit');
            var guessField = document.querySelector('.guessField');
            var won = document.querySelector('#won');
            var lost = document.querySelector('#lost');
            var gamesWon = 0;
            var gamesLost = 0;
            
            var guessCount = 1;
            var resetButton = document.querySelector('#reset');
            resetButton.style.display = 'none';
            var resetButton;
            
            
            function checkGuess(){
                var userGuess = Number(guessField.value);
                    if(userGuess === randomNumber){
                        lastResult.innerHTML = 'Congratulations! You got it right!';
                        lastResult.style.background = 'green';
                        lowOrHi.innerHTML = '';
                        gamesWon++;
                        setGameOver();
                    }
                    else if(guessCount === 7){
                        lastResult.innerHTML = 'Sorry, you lost!';
                        lastResult.style.color = 'white';
                        gamesLost++;
                        setGameOver();
                    }
                    else if(userGuess > 99 || userGuess < 1){
                        lastResult.innerHTML = "ERROR: Please enter a value between 1-100";
                        lastResult.style.backgroundColor = 'white';
                        lastResult.style.color = 'black';
                    }
                    else if(Number.isInteger(userGuess) != true){
                        lastResult.innerHTML = "ERROR: Please enter a value between 1-100";
                        lastResult.style.backgroundColor = 'white';
                        lastResult.style.color = 'black';
                    }
                    else{
                        lastResult.innerHTML = 'Wrong!';
                        lastResult.style.backgroundColor = 'red';
                        if(userGuess < randomNumber){
                            lowOrHi.innerHTML = 'Last guess was too low!';
                        } else if(userGuess > randomNumber){
                            lowOrHi.innerHTML = 'Last guess was too high!';
                        }
                        if(guessCount === 1){
                            guesses.innerHTML = 'previous guesses: ';
                        }
                        guesses.innerHTML += userGuess + ' ';
                        guessCount++;
                    }
                    guessField.value = '';
                    guessField.focus();
            }
            
            guessSubmit.addEventListener('click',checkGuess);
            
            function setGameOver(){
                guessField.disabled = true;
                guessSubmit.disabled = true;
                resetButton.style.display = 'inline';
                resetButton.addEventListener('click', resetGame);
                won.innerHTML += 'Games won: ' + gamesWon;
                lost.innerHTML += 'Games lost: ' + gamesLost;
            }
            
            function resetGame(){
                guessCount = 1;
                var resetParas = document.querySelectorAll('.resultParas p');
                for(var i = 0; i < resetParas.length; i++){
                    resetParas[i].textContent = '';
                }
                resetButton.style.display = 'none';
                
                guessField.disabled = false;
                guessSubmit.disabled = false;
                guessField.value = '';
                guessField.focus();
                
                lastResult.style.backgroundColor = 'white';
                
                randomNumber = Math.floor(Math.random() * 99)+1;
            }