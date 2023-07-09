import React from 'react'

function For(props) {
  return (<div>
  <img src={props.icon} alt='icon'/>
    <h2>{props.avg}°C</h2> 
    <i>{props.text}</i>
    <span>{props.date}</span>

    </div>

  )
}

export default For