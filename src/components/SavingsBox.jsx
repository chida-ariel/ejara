import React from 'react'
import "../styles/savingsbox.css";

const SavingsBox = () => {
  return (
    <div className='savings'>
      <img className='img' src="/ej-im/fourty.png"/>
      <div className='save'>
        <h2>Savings box</h2>
        <p>Épargne facilement pour les urgences tout en bénéficiant d'un taux d'intérêt annuel de 2 %. Adossé à des obligations d'État, il garantit sécurité, flexibilité et un accès facile à tes fonds. Télécharge l'application pour commencer à épargner.</p>
       <div className='arrow'> <a href="#">
          <img src="/ej-im/arrow_circle_right.png"/>
        </a> </div>
      </div>
    </div>
  )
}

export default SavingsBox;
