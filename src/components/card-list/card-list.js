import React from 'react'
import './style.css'
import Card from '../card/card'

/**
* @author
* @function CardList
**/

const CardList = (props) => {
  return(
    <div className="card-list">
        {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster}/>
        ))}    
    </div>
   )

 }

export default CardList