import React, {useState} from 'react'
import { connect } from 'react-redux';
import { addNoteAction } from '../redux/actions/addNoteAction';

const FormAddNote = ({types, addNote}) => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [text, setText] = useState('');

    const onAddNote = e => {
        e.preventDefault()
        if(!type) {
            alert('Добавте категорию!')
            return
        }
        const note = {
            id: new Date().toString(),
            title,
            type,
            text
        }
        addNote(note)
        setTitle('')
        setType('')
        setText('')
    }

    return(
        <form onSubmit={onAddNote}>
            <div className="form-group">
                <label for="exampleFormControlInput1">Название записи</label>
                <input 
                required
                type="text" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="Ввелите название записи"
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label 
                required 
                for="exampleFormControlSelect1">Категория записи</label>
                <select 
                className="form-control" 
                id="exampleFormControlSelect1"
                value={type}
                onChange={e => setType(e.target.value)}
                >
                    {types.length ? types.map(type => <option>{type}</option>) : <option default disabled>Добавьте категорию</option>}
                </select>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Текст записи</label>
                <textarea
                required 
                className="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3"
                value={text}
                onChange={e => setText(e.target.value)}
                ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Добавить</button>
        </form>
    )
}

const mapStateToProps = state => ({
    types: state.types.types
})

const mapDispatchToProps = dispatch => {
    return{
        addNote: note => {
            dispatch(addNoteAction(note))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddNote)