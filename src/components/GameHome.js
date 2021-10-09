import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

function GameHome (props){


    return( props.show?
        <div id='gameHome'>
    
        
        <button id='start' onClick={props.handleStart}>START GAME</button>


        </div>:<Fragment/>
    )

}

export default GameHome;