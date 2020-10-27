import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Airline from './Airline'
import styled from 'styled-components'

const Home = styled.div`
  text-align:center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`

const Header = styled.div`
  padding:100px 100px 10px 100px;
  
  h1 {
    font-size:42px;
  }
`

const Subheader = styled.div`
  font-weight:300;
  font-size:26px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding:20px;
`

const Airlines = () => {
  const [airlines, setAirlines] = useState([])
  
  useEffect( () => {
    axios.get('/api/v1/airlines.json')
    .then( resp => {
      setAirlines(resp.data.data)

      // resp.data is {}
      // resp.data.data is []
      // {}.map
      // [].map
    })
    .catch( data => {
      debugger
    })
  }, [])

  const grid = airlines.map( (airline, index) => {
      return (<Airline
        key={index}
        airline={airline.attributes}
        />  )
  })
  
  return (
    <Home>
      <Header>
        <h1>OpenFlights</h1>
        <Subheader>Honest, unbiased airline reviews. Share your experience.</Subheader>
      </Header>
      <Grid>
        {grid}
      </Grid>
    </Home>
  )
}

export default Airlines