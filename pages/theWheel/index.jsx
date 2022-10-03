import React, { useState, useEffect } from 'react'
import { getQuotes, getOptionsChain } from  '../../apis/tdAmeritrade'
import * as Styled from './index.styled'
const NUMBER_OF_SHARES = 100;

const index = () => {
  const [quotes, setQuotes] = useState([]);
  const [optionsChain, setOptionsChain] = useState([]);
    useEffect( () => {
      getQuotes('AAPL').then( (data) => {
        setQuotes(data);
      })
      getOptionsChain('AAPL').then( (data) => {
        setOptionsChain(data);
        console.log(data.callExpDateMap)
      })
    }, []) 

  return (
    <>
      <Styled.Container>
          <div>
            <h2>Debit</h2>
            <div>Date</div>
            <div>Action</div>
            <div>Contract Price / Share Price</div>
            <div>Total Money Received</div>
          </div>
          <div>
            <h2>Credit</h2>
            <div>Date</div>
            <div>Action</div>
            <div>Contract Price / Share Price</div>
            <div>Total Money Paid</div>
          </div>
      </Styled.Container>
      <div>
        <div>Status</div>
        <div>Adjusted Cost Basis / Running PL</div>
        <div>Total Credit</div>
        <div>Total Debit</div>
        <div>Try to sell above: </div>
      </div>
    </>
  )
}

export default index