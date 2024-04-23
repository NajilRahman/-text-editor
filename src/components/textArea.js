import React from 'react'
import { useState } from 'react';

function TextArea(props) {
    const [text,setText]=useState('enter your text');
    const textChange=(e)=>{
        setText(e.target.value);
    }
    const uppercase=()=>{
        setText(text.toUpperCase());
    }
    const lowercase=()=>{
        setText(text.toLowerCase());
    }
    const countWords= ()=>{
        var arr;
        arr=text.split(' ').join('');
        setText(text.split(' ').length+" Words and "+arr.length+' charecters Present in the text');
    }

    const cleartext=()=>{
        setText('');
    }

  return (
    <div className='container' id='textMani'>
        <div className="form-floating">
            <textarea value={text} onChange={textChange} style={{height:'65vh'}} className="form-control" placeholder="Leave a comment here" id="floatingTextarea" ></textarea>
            <label htmlFor="floatingTextarea">{props.textState}</label>
        </div>
        <div className='container' id='buttons'>
        <button className="btn btn-primary" onClick={uppercase}>toUpperCase</button>
        <button className="btn btn-primary" onClick={lowercase}>toLowerCase</button>
        <button className="btn btn-primary" onClick={countWords}>No Words</button>
        <button className="btn btn-primary" onClick={cleartext}>Clear Text</button>
        </div>
        
        <div className='container'>
            <span>{text.split('').length+" Words and "+text.split(' ').join('').length+' charecters Present in the text'}</span>
        </div>
    </div>
  )
}

export default TextArea;
