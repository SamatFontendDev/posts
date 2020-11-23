import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import Note from './Note'

const NotesList = ({notes}) => {
    let {id} = useParams()

    if(id) {
        notes = notes.filter(el => el.type === id)
    }
   
    return(
        <div>
            {notes.length ? notes.map(note =>  <Note note={note} />) : 'Записей нет'}
        </div>
    )
}

const mapStateToProps = state => ({
    notes: state.notes.notes
})

export default connect(mapStateToProps)(NotesList)