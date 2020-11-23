import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import NotesList from './NotesList'
import Type from './Type'

const Notes = ({types}) => {
    return(
        <div>
            <Navbar/>
             <div className="container">
                 <div className="row">
                     <div className="col-md-4">
                         {types.length ? types.map(type => <Type type={type}/>) : 'Категорий пока нет'}
                     </div>
                     <div className="col-md-8">
                        <NotesList/>
                     </div>
                 </div>
            </div>
        </div>
       
       
    )
}

const mapStateToProps = state => ({
    types: state.types.types
})
    


export default connect(mapStateToProps)(Notes)