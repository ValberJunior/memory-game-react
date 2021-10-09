import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import CardElement from './CardElement';

function GameBoard(props){

    return( props.show?
    <div className='game' id='gameBoard'>

        {props.cards.map((card,index)=>
         <CardElement handleFlip={props.handleFlip} card={card} key={index}/>
        )}
    </div>:<Fragment/>)
}

export default GameBoard;