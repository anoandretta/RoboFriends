import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    return (
     <div> 
      {
          robots.map((user, i) => {
        
 // Quando faz um looping é bom dar uma key, para se apagar um item ele saber qual item ta sendo apagado
         return (
         <Card 
            key={i} 
            id={robots[i].id} 
            name={robots.[i].name} 
            email={robots[i].email}/>
            
            );
          })
      }
    </div>

    );
}

export default CardList;