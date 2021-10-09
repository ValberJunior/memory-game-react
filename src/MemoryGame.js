import React, { useEffect, useState } from 'react';
import game from './game/game';
import GameOver from './components/GameOver';
import GameHome from  './components/GameHome';
import GameBoard from './components/GameBoard';


function MemoryGame (){

    //home
    const [gameHome, setGameHome] = useState(true);

    //gameboard
    const[gameBoardOn, setGameBoardOn] = useState(false);

    //cards
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        setCards(game.createCards());
    },[]);
    
    //gameOver
    const [gameOver, setGameOver] = useState(false);

    //Start
    function start(){

        setGameHome(false);
        setGameBoardOn(true);

    }

    //Restart
    function restart(){
        game.clearCards();
        setCards(game.createCards());
        setGameOver(false);
    }

    //Flip cards
    function handleFlip(card){

        if (game.setCard(card.id)){

        //aqui

        if (game.secondCard){

            if(game.checkMatch()){
             game.clearCards();

                if (game.checkGameOver()){
                //GameOver
                setGameOver(true)
                 };
            }else{
                setTimeout(() => {
                    // No Match
                game.unflipCards();
                setCards([...game.cards])
                }, 1000);

                 }
            }
         }
         setCards([...game.cards])

        
    }

    return(
        <div>
            <GameHome show={gameHome} handleStart={start} handleFlip={handleFlip}/>
            <GameBoard show={gameBoardOn} cards={cards}/>
            <GameOver show={gameOver} handleRestart={restart}/>
        </div>
    )
}

export default MemoryGame;