import React from 'react'

function Board(props) {
    const drop = event => {
        event.preventDefault()
        const card_id = event.dataTransfer.getData('card_id')
        console.log(card_id);
        const card = document.getElementById(card_id)
        card.style.display = "block"
        event.target.appendChild(card)
    }

    const dragOver = e => {
        e.preventDefault()

    }
    return (
        <div
            id = {props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
        >
            {props.children}
        </div>
    )
}

export default Board
