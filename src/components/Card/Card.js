import React from 'react'
import styles from './card.module.css';

const Card = (props) => {
  return (
    <div className={`${styles.Card} ${props.className}`}>{props.children}</div>
  )
}

export default Card