import React from 'react'

function Card(props) {
  return (
    <div className='card' style={styles.card}>
      <img  style={styles.image} src={props.card_number}></img>
    </div>
  )
}

const styles = {
  card:{
    width: '950px',
    height: '600px',
    backgroundColor : 'blue',
    border : '2px solid white',
    boxSizing: 'border-box',
    fontSize: '2.5em',
    color: 'white'
  },
  image:{
    width:'100%',
    height: '100%'
  }
}

export default Card