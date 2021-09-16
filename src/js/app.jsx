import React from 'react'
import ReactDOM from 'react-dom'

import Image from './Image'
import Card from './Card'

function App() {
    return (
        <div className="card" style={{width: '18rem'}}>
            <Image />
            <Card />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)