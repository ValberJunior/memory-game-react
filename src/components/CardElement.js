import React from 'react';


function CardElement(props){

    return(

    <div onClick={()=>{props.handleFlip(props.card)}} id={props.card.id} className={`card ${props.card.flipped?'flip':''}`}>
    
    {/* Front */}
    <div className='card_front'>
        <img className='icon' src={`assets/${props.card.icon}.png`} alt={props.card.icon}/>
    </div>

    {/* Back */}
    <div className='card_back'>
    <img className='icon' src='assets/back.png' alt='Back Card'/>
    </div>

    </div>

    )

}

export default CardElement;