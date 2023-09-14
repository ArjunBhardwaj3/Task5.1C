import React from 'react'

const FormAbstract = () => 
{
    return <div>
        <p className='form-title'>What do you want to ask or share</p>
        <div className="row">
            <label for='title' className='col-3 col-lg-2 col-xxl-1'>Title</label>
            <br/>
            <input id='title' type='text' className='col-4' placeholder='Enter a descriptive title'/>
        </div>
        <br/>
        <div className="row">
            <label for='abstract' className='col-4'>Abstract</label>
            <br/>
            <textarea id='abstract' type='text' className='col-4' placeholder='Enter a 1-paragraph abstract'/>
        </div>
        <br/>
        <div className='row'>
            <label for='article' className='col-4'>Article Text</label>
            <br/>
            <textarea id='article' type='text' className='col-4' placeholder='Enter a 1-paragraph abstract'/>
        </div>
        <br/>
        <div className="row">
            <label for='tags' className='col-4'>Tags</label>
            <input id='tags' type='text' className='col-4' placeholder='Please add up to 3 tags to describe what your question is about e.g., java'/>
        </div>
        <br/>
        
    </div>
}

export default FormAbstract