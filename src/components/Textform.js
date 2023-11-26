import React,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    let  newtext = text.toUpperCase(); 
    setText(newtext)
    props.showAlert("Text has been Uppercased","success");
  }
  const handleLowClick = ()=>{
    let  newtext = text.toLowerCase(); 
    setText(newtext)
    props.showAlert("Text has been Lowercased","success");
  }  
  const handleClearClick = ()=>{
    let  newtext = ''; 
    setText(newtext)
    props.showAlert("Text has been Cleared","success");
  }
  const handleInvertClick = ()=>{
    const  newtext = text.split('')
    let newtext1 = '';
    for( let i=0;i<newtext.length;i++){
        if(newtext[i]===newtext[i].toUpperCase()){
            newtext1 = newtext1.concat(newtext[i].toLowerCase())
        }
        else{
            newtext1 = newtext1.concat(newtext[i].toUpperCase())
        }
    }
    setText(newtext1)
    props.showAlert("Text has been Inverted","success")
  }  
  const handleOnChange = (event)=>{
    console.log("on change")
    setText(event.target.value)
  }
  const [text,setText] = useState("");
  return (
    <>
    <div className='container' style={{color:props.mode=== 'dark' ?'white':'black'}} id='head'>
    <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="8"></textarea>
  </div>
  <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button type="button" className="btn btn-success mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
  <button type="button" className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
  <button type="button" className="btn btn-secondary mx-2" onClick={handleInvertClick}>Invert Case</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length === 1 ? 0 : text.split(" ").length-1} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text === "" ? "Enter Some Text For Preview" : text}</p>
</div>
</>
  )
}
