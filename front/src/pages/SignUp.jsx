import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import GoogleSignIn from "../assets/signIn.png";
import GoogleSignUp from "../assets/signup.png";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import api from "../api/users.js";
function SignUp (){
    const [value, setValue] = useState()
    const postUser = async ()=> {
			console.log("guau")
        try {
            const response = await api.post('/register', {
                user_phone: value
            })
            console.log(response.data)
        } catch (err) {
            console.log(err)
        }
    }
    const titleStyles = {
        fontSize: "3rem",
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginBottom: "1rem",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "inline",
        padding: "0.5rem",
        borderRadius: "0.5rem"
        
    }
    const divStyles = {
        boxShadow: '1px 2px 9px #black',
        margin: '2em 6em 0 6em',
        padding: '1em',
        borderRadius: '1em',
        backgroundColor: '#4285f4',
        paddingBottom: '1em',
        paddingTop: '1em',
        paddingLeft: '1em',
        textAlign : 'center',
        color: '#FFFFFF',
        fontSize : '40px',
        paddingRight: '1em'
        
      };
    const imgStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '15em',
        backgroundColor: '#4285f4',
        color: '#6157FE'
    };
    const buttonStyles = {
       
        borderRadius: '90px',
        backgroundColor: '#FFFFFF',
        paddingLeft: '1em',
        textAlign : 'center',
        color: '#6157FE',
        fontSize : '20px',
        paddingRight: '1em'

    };
    const generaltextStyles = {
        fontSize: "1.3rem",
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        marginBottom: "1rem",
        padding: "0.5rem",
        paddingTop: "2rem",
        borderRadius: "0.5rem"
    };

    return (
        <div className="SignUp">
        <div style={titleStyles}>Se parte de la mayor comunidad de viajeros de Bolivia!</div> 
          <div style={divStyles}>
          <div><b>Crea una Cuenta</b></div>
          <div style={generaltextStyles}>Número de teléfono:</div>
          <PhoneInput
                value={value}
                onChange={setValue}
                width= "60%"
                color= "#FFFFFF"
                paddingBottom= "3em" 
                />
            <div style={generaltextStyles}>Registrate con:</div>    
            <button onClick={postUser} style={buttonStyles}> <img style={imgStyles}src={GoogleSignUp} alt="" /></button>
            <div>
            </div>
            
            </div>
            </div> 
    );
}
export default SignUp;

