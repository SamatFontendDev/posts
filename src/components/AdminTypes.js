import React from 'react'
import { connect } from 'react-redux'
import AdminType from './AdminType'

const AdminTypes = ({types}) => (
    <ul className="list-group list-group-flush">
        {types.length ? types.map(type => <AdminType type={type} />) : 'Категорий пока нет'}
    </ul>
)

const mapStateToProps = state => ({
    types: state.types.types
})

export default connect(mapStateToProps)(AdminTypes)