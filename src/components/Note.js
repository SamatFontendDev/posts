import React from 'react'

const Note = ({note}) => {
    return(
        <div className="card mb-2">
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{note.id}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{note.type}</h6>
                <p className="card-text">{note.text}</p>
            </div>
        </div>
    )
}

export default Note