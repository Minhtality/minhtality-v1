import React, { useEffect } from 'react'
import { getQuotes } from  '../../apis/tdAmeritrade'
const NUMBER_OF_SHARES = 100;

const index = () => {
    useEffect( () => {
      getQuotes('AAPL,NET').then( (data) => {
        console.log(data)
      })
    }, []) 

  return (
    <div>
        <div>
          <h2>Debit</h2>

        </div>
        <div>Credit</div>
    </div>
  )
}

export default index