import React from 'react';
import './Form.scss';
import { useState } from 'react';

const Form = ({handleApiCall}) => {

  const [ method, setMethod ] = useState("");
  const [ url, setUrl ] = useState("");
  const [ text, changeText] = useState("");
  
  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method:method,
      url: url,
      text: text,
    }
    handleApiCall(formData);
    console.log(formData);
  }


    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input  type='text' value={url} onChange={(e)=>setUrl(e.target.value)}/>
            <button type="submit">GO!</button>
          </label>

          <label className="methods">
            <input type="radio" value="GET" name="method" onChange={(e)=> setMethod(e.target.value)} />GET
          </label>
          <label className="methods">
            <input type="radio" value="POST" name="method" onChange={(e)=> setMethod(e.target.value)} />POST
          </label>
          <label className="methods">
            <input type="radio" value="PUT" name="method" onChange={(e)=> setMethod(e.target.value)} />PUT
          </label>
          <label className="methods">
            <input type="radio" value="DELETE" name="method" onChange={(e)=> setMethod(e.target.value)} />DELETE
          </label>
          <label> 
            <textarea value={text} onChange={(e)=> changeText(e.target.value)}></textarea>
          </label>
        </form>

      </>
    );
  };


export default Form;