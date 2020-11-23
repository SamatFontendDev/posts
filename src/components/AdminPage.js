import React from 'react'
import { connect } from 'react-redux'
import AdminNote from './AdminNote'
import AdminTypes from './AdminTypes'
import FormAddNote from './FormAddNote'
import FormAddType from './FormAddType'
import Navbar from './Navbar'

const AdminNotes = ({notes}) => {
    return(
        <div>
             <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Добавить категорию</h3>
                        <FormAddType/>
                        <h3>Категории</h3>
                        <AdminTypes/>
                    </div>
                    <div className="pl-4 col-md-8">
                        <h3>Добавить запись</h3>
                        <FormAddNote/>
                        <h3>Записи</h3>
                        <div className="notes">
                            {
                                notes.length ? notes.map(note => <AdminNote key={note.id} note={note} />) : 'Записей пока нет'
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
       
    )
}

const mapStateToProps = state => ({
    notes: state.notes.notes
})

export default connect(mapStateToProps)(AdminNotes)