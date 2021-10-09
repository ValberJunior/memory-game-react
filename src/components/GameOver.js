import React from 'react';
import { Fragment } from 'react';

function GameOver (props){


    return(props.show?
        <div id='gameOver'>
    
        <div>
            Parabéns!!!<br/> Você completou o Jogo!
        </div>
        <button id='btn' onClick={props.handleRestart}>Jogue novamente</button>

        </div>:<Fragment/>
    )

}

export default GameOver;