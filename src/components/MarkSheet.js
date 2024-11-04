import React, { useRef } from 'react'

function MarkSheet() {
     let nameInputRef=useRef();
     let telInputRef=useRef();
     let rollInputRef=useRef();
     let engInputRef=useRef();
     let matInputRef=useRef();
     let hinInputRef=useRef();
     let sciInputRef=useRef();
     let socInputRef=useRef();

     let nameSpanref=useRef();
     let rollSpanref=useRef();
     let telSpanref=useRef();
     let engSpanref=useRef();
     let hinSpanref=useRef();
     let matSpanref=useRef();
     let sciSpanref=useRef();
     let socSpanref=useRef();

     let outSpanRef=useRef();

     let inputonFocus =(inputRef)=>{
          inputRef.current.style.backgroundColor="blue" }
     let inputonBlur =(inputRef)=>{
          inputRef.current.style.backgroundColor=""}     
     let inputonChange =(InputRef,Spanref)=>{
          let marks =InputRef.current.value;
          if(marks>=0 && marks <=100)
     {if(marks>35){Spanref.current.innerHTML="pass";
       Spanref.current.style.backgroundColor="green"}
      else{Spanref.current.innerHTML="fail";
      Spanref.current.style.backgroundColor="red"}
     }
     else{Spanref.current.innerHTML="invalid";
      Spanref.current.style.backgroundColor="yellow"} 
     }
     // let telonFocus =()=>{
     //      telInputRef.current.style.backgroundColor="blue"}
     // let telonBlur =()=>{
     //      telInputRef.current.style.backgroundColor="" }
     let totalonClick=()=>{
          let name     = nameInputRef.current.value;
          let rollnum  = Number(rollInputRef.current.value);
          let telmarks = Number(telInputRef.current.value);
          let engmarks = Number(engInputRef.current.value);
          let matmarks = Number(matInputRef.current.value);
          let hinmarks = Number(hinInputRef.current.value);
          let scimarks = Number(sciInputRef.current.value);
          let socmarks = Number(socInputRef.current.value);
           
          let totalmarks = telmarks+engmarks+hinmarks+matmarks+scimarks+socmarks;
          let per =(totalmarks/600)*100;
          let result ;
          if(telmarks>34 && engmarks>34 && hinmarks>34 && matmarks>34 && scimarks>34 && socmarks>34)
               {result ="passed"}
             else{ result ="failed"};
          alert(` roll no.${rollnum} ${name} ${totalmarks}`)
          outSpanRef.current.innerHTML=(` roll no.${rollnum}         ${name} ${result} and got ${totalmarks}  marks with ${per.toFixed(2)}%  `);
         
     }
     let claculateResult =(telmarks,engmarks,hinmarks,matmarks,scimarks,socmarks,name)=>{
         let totalMarks =telmarks+engmarks+hinmarks+matmarks+scimarks+socmarks;
      let per =(totalMarks/600)*100;
      console.log(` ${name} got  ${totalMarks} marks with ${per.toFixed(2)}%`)

     }
   claculateResult(89,91,99,95,96,97,"kamal");
   claculateResult(82,93,94,95,96,99,"Rana");
  return (
    <div>
    <form>
    <div>
     <label>Name</label>
     <input type='text' ref={nameInputRef}></input>
     <span ref={nameSpanref}></span>
    </div>
     <div>
     <label>Roll number</label>
     <input type='number' ref={rollInputRef}></input>
     <span ref={rollSpanref}></span>
    </div>
    <div>
     <label>Telugu</label>
     <input type='number' ref={telInputRef}
      onBlur={()=>{inputonBlur (telInputRef);}} 
      onFocus={()=>{inputonFocus(telInputRef);}}
      onChange={()=>{ inputonChange(telInputRef,telSpanref);}}
       ></input>
     <span ref={telSpanref}></span>
    </div>
    <div>
     <label>English</label>
     <input type='number' ref={engInputRef} 
      onFocus={()=>{inputonFocus(engInputRef);}}
      onBlur={()=>{inputonBlur (engInputRef);}}
      onChange={()=>{inputonChange(engInputRef,engSpanref);}}
      ></input>
     <span ref={engSpanref}></span>
    </div>
    <div>
     <label>Hindi</label>
     <input type='number' ref={hinInputRef}
      onFocus={()=>{inputonFocus(hinInputRef);}}
      onBlur={()=>{inputonBlur (hinInputRef);}}
      onChange={()=>{inputonChange(hinInputRef,hinSpanref);}}
          ></input>
     <span ref={hinSpanref}></span>
    </div>
    <div>
     <label>Maths</label>
     <input type='number' ref={matInputRef}
      onFocus={()=>{inputonFocus(matInputRef);}}
      onBlur={()=>{inputonBlur (matInputRef);}}
      onChange={()=>{inputonChange(matInputRef,matSpanref);}}
          ></input>
     <span ref={matSpanref}></span>
    </div>
    <div>
     <label>Science</label>
     <input type='number' ref={sciInputRef}
      onFocus={()=>{inputonFocus(sciInputRef);}}
      onBlur={()=>{inputonBlur (sciInputRef);}}
      onChange={()=>{inputonChange(sciInputRef,sciSpanref);}}
     ></input>
     <span ref={sciSpanref}></span>
    </div>
    <div>
     <label>Social</label>
     <input type='number' ref={socInputRef}
      onFocus={()=>{inputonFocus(socInputRef);}}
      onBlur={()=>{inputonBlur (socInputRef);}} 
      onChange={()=>{inputonChange(socInputRef,socSpanref);}}
     ></input>
     <span ref={socSpanref}></span>
    </div>
    <div><button type='button'
     onClick={()=>{totalonClick ();}}
     > click here</button></div>
    <p ref={outSpanRef}>Result</p>
    </form>
    </div>
  )
}

export default MarkSheet