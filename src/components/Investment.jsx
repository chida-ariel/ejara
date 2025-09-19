import React from 'react'
import "../styles/investment.css"

const Investment = () => {
  return (
    <div className='invest'>
      <img className='img' src="/assets/img/investment.png"/>
      <div className='investment'>
        <h1>Investment</h1>
        <p>Invested as professionals in government bonds from as early as CFAF 1000 and earns up to
           6.5% annual interest. Capital is guaranteed by the Central African Bank of States (BEAC)</p>
           <div className='arrow'>
            <a href='#'>
              <img src="/ej-im/arrow2.png"/>
            </a>
           </div>
      </div>
      
    </div>
  )
}

export default Investment;
