import React from 'react'
import "./Home.css"

const Home = (props) => {
  return (<div className='main_container'>
    <div className='image'>{props.image}</div>
    <div className='container'>    
    <h1>{props.company}</h1>
    <h2>{props.title}</h2>
    <h4>{props.startDate}</h4>
    <h4>{props.endDate}</h4>
    </div>
    </div>
  
  )
}

export default Home