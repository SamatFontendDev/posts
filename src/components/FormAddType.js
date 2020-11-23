import React, {useState} from 'react'
import { connect } from 'react-redux';
import { addTypeAction } from '../redux/actions/addTypeAction';

const FormAddType = ({addType}) => {
    const [title, setTitle] = useState('');

    const onAddType = (e) => {
        e.preventDefault()

        addType(title)
        setTitle('')
    }

    const onSetTitle = e => {
        setTitle(e.target.value)
    }
  
        return(
            <form onSubmit={onAddType}>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Название категории</label>
                    <input
                    required 
                    type="text" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="Ввелите название категории"
                    value={title}
                    onChange={onSetTitle}
                    />
                </div>
                <button type="submit" class="btn btn-primary">Добавить</button>
            </form>
        )
    
    
}

const mapDispatchToProps = dispatch => {
    return{
            addType: title => {
                dispatch(addTypeAction(title))
            },
        }
}


export default connect(null, mapDispatchToProps)(FormAddType)