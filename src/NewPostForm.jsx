import React, {useState} from 'react'
import FormDiscription from './FormDiscription';
import './PostForm.css'
import FormAbstract from './FormAbstract';

const NewPostForm = () => 
{
    var [Type, setType] = useState("")

    return <div className='form-div'>
        <p className='form-title'>New Post</p>
        <form>
            <div className='row'>
                <label className='col-3 col-lg-2'>Select Post Type:</label>
                <div className='col-3 col-lg-2'>
                    <input type="radio" id='Question' name='Type' value='Question' required onChange={e => setType(e.target.value)} />
                    <label for='Question' >Question</label>
                </div>
                <div className='col-4'>
                    <input type="radio" id='Article' name='Type' value='Article' required onChange={e => setType(e.target.value)} />
                    <label for='Article'>Article</label>
                </div>
            </div>

            {Type === 'Question' || Type === 'Question' ? <FormDiscription/> : null}
            {Type === 'Article' || Type === 'Article' ? <FormAbstract/>: null}

            <input type='submit' value="Post" className='btn btn-secondary form-button'/>
        </form>
    </div>
}

export default NewPostForm