import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props)=>{
    
    const [input,setInput] = useState(""); // to save the input form
    const [recentPrompt,setRecentPrompt] = useState("");// when send button is clicked - input data is saved in recentPrompt and to display in main component
    const [prevPrompts,setPrevPrompts] = useState([]);//it is a array to display all prev input in recent tab
    const [showResult,setShowResult] = useState(false);// when it is true it used to remove cards and greeting text 
    const [loading,setLoading] = useState(false);// for loading animation after sending 
    const [resultData,setResultData] = useState(""); // to display result on web page

    const delayPara=(index,nextWord)=>{ // this is for typing effect
     setTimeout(function() {
        setResultData(prev=>prev+nextWord);
     }, 75*index);
    }

    const newChat = ()=>{
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async (prompt)=>{

        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        if (prompt!==undefined) {
            response = await runChat(prompt)
            setRecentPrompt(prompt)

        }
        else{
            setPrevPrompts(prev=>[...prev,input])
            setRecentPrompt(input)
            response = await runChat(input)
        }
         

       




    //     setRecentPrompt(input)
    //     setPrevPrompts(prev=>[...prev,input])
    //    const response = await runChat(input)
       let responseArray = response.split("**")//## React: A JavaScript Library for Building User Interfaces React, often referred to as React.js or ReactJS, is a popular JavaScript library used for building user interfaces (UIs). Developed and maintained by Facebook, it has become a cornerstone technology for web development, enabling developers to create interactive and dynamic web applications. **Core Concepts of React:** * **Components:** React applications are built using reusable components, which are independent and modular pieces of UI. Each component manages its own state and rendering logic. * **JSX:**
       //-> after searching we get response with ** ..we use split methoda ans store in responseArray 
       let newResponse ="";
       for(let i=0;i<responseArray.length;i++){ // here we wil iterate through each word separated by ** ..around that we will add bold tag
        if(i===0 || i%2!==1){ // if i is even
            newResponse+=responseArray[i];
        }
        else{
            newResponse += "<b>"+responseArray[i]+"</b>";
        }
       }
       let newResponse2 = newResponse.split("*").join("</br>")
       //setResultData(newResponse2) // storing response
       const newResponseArray = newResponse2.split(" ");
       for (let i = 0; i < newResponseArray.length; i++) {
       const nextWord = newResponseArray[i];
       delayPara(i,nextWord+" ")
        
       }
       setLoading(false) // loading false
       setInput("") // reseting input field after result
    }
//    onSent("are you working gemini?")

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat,
        //handleKeyPress,

    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider