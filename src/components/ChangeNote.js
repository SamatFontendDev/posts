import React, {useState} from 'react'
import { connect } from 'react-redux'
import {changeNoteAction} from '../redux/actions/changeNoteAction'

const ChangeNote = ({types, id, changeNote, note}) => {
    const [title, setTitle] = useState(note.title)
    const [type, setType] = useState(note.type)
    const [text, setText] = useState(note.text)

    const onChangeNote = e => {
        e.preventDefault()

        const o = {
            title,
            type,
            text,
            id,
        }

        changeNote(o)
    }

    return (
        <form onSubmit={onChangeNote} className="pt-2">
            <div className="form-group">
                <label for="exampleFormControlInput1">Изменить название записи</label>
                <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                type="text"
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="Название записи"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlSelect1">Изменить категорию</label>
                <select
                value={type}
                onChange={ e => setType(e.target.value)} 
                className="form-control" 
                id="exampleFormControlSelect1">
                    {types.map(type => <option>{type}</option>)}
                </select>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Изменить текст записи</label>
                <textarea
                value={text}
                onChange={ e => setText(e.target.value)}
                className="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3"></textarea>
            </div>
            <button className="btn btn-primary">Изменить</button>
        </form>
    )
}

const mapStateToProps = state => ({
    types: state.types.types
})

const mapDispatchToProps = dispatch => {
    return{
        changeNote: note => {
            dispatch(changeNoteAction(note))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeNote)