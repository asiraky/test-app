import React from 'react'
import cn from 'classnames'

import styles from './Card.module.scss'

export default function Card() {
    return (
        <div className={cn('card-body', styles.card)}>
            <p className={cn('card-text', styles.para)}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    )
}