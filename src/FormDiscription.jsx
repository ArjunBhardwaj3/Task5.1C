import React from 'react'

const FormDiscription = () => 
{
    return <div>
        <p className='form-title'>What do you want to ask or share</p>
        <div className="row">
            <label for='title' className='col-4'>Title</label>
            <br/>
            <input id='title' type='text' className='col-4' placeholder='Start your question with how, what, why, etc.'/>
        </div>
        <br/>
        <div className="row">
            <label for='description' className='col-4'>Describe your problem</label>
            <br/>
            <textarea id='description' type='text' className='col-4'/>
        </div>
        <br/>
        <div className="row">
            <label for='tags' className='col-4'>Tags</label>
            <br/>
            <input id='tags' type='text' className='col-4' placeholder='Please add up to 3 tags to describe what your question is about e.g., java'/>
        </div>
        <br/>
        
    </div>
}

export default FormDiscription