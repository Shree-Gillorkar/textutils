import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        //console.log("UpperCase Clicked");
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleDownClick = ()=>{
        //console.log("UpperCase Clicked");
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase!", "success");
    }

    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }

    const handleClearText = (event)=>{
        //console.log("Clear Text Clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    
    const handleFirstCapital = ()=>{
        //console.log("Clear Text Clicked");
        let newText = text.charAt(0).toUpperCase()+text.substring(1,text.length).toLowerCase();
        setText(newText);
        props.showAlert("First Letter is been captalized!", "success");
    }

    const handleExtraSpace = ()=>{
        //console.log("Remove Extra Space Clicked");
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces!", "success");
    }

    const handleCopyText = ()=>{
        //console.log("Copy Text Clicked");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!", "success");
    }

    const[text, setText] = useState('');
    //setText("new text");
  return (
      <>
    <div className="container" style = {{color:props.mode==='dark'?'white':'black'}}>
        <h1 >{props.heading}</h1>
        <div className = "mb-3">
           <textarea className = "form-control" style = {{backgroundColor:props.mode==='dark'?'rgb(33 33 36)':'white', color:props.mode==='dark'?'white':'black'}} value = {text} onChange = {handleOnChange} id = "myBox" row = "8"/>
        </div>
        <button className="btn btn-primary mx-1"  onClick={handleUpClick} >Convert to UperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to LowerCase</button> 
        <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button> 
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button> 
        <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleFirstCapital}>First Letter Capital</button>

    </div>
    <div className="container my-3" style = {{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p><b>{text.split(" ").length-1}</b> Words and <b>{text.length}</b> Characters</p>
    <p><b>{0.008*text.split("").length}</b> Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here..."}</p>
    </div>
    </>
  )
}
