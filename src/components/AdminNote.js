import React, {useState} from 'react'
import { connect } from 'react-redux'
import { deleteNoteAction } from '../redux/actions/deleteNoteAction'
import ChangeNote from './ChangeNote'

const AdminNote = ({note, deleteNote}) => {
    const [flag, setFlag] = useState(false)
    
    const changeFlag = () => {
        setFlag(!flag)
    }

    const onDeleteNote = () => {
        deleteNote(note.id)
    }

    return(
        <div className="card mb-2">
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{note.id}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{note.type}</h6>
                <p className="card-text">{note.text}</p>
                <button onClick={changeFlag} type="button" className="btn btn-primary mr-2">{flag ? 'Отмена' : 'Редактировать'}</button>
                <button 
                onClick={onDeleteNote}
                type="button" 
                className="btn btn-danger">Удалить</button>
                <div className="pt2">
                    {flag && <ChangeNote note={note} id={note.id} />}
                </div>
            </div>
        </div> 
    )
}

const mapDispatchToProps = dispatch => {
    return{
        deleteNote: id => {
            dispatch(deleteNoteAction(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(AdminNote)