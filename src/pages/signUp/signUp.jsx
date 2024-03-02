import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './signUp.css'
import axios from 'axios';
import { useCookies } from 'react-cookie';
export default function signUp() {

    const [FullName, setFullName] = useState("");
    const [UserName, setUserName] = useState("");
    const [Email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    const [cookies, setCookie] = useCookies(['user']);
    const navigate = useNavigate();

    const handleInputChange = (e, type) => {
        switch (type) {
            case "FN":
                setError("");
                setFullName(e.target.value);
                if (e.target.value === "") {
                    setError("full name has left blank");
                }
                break;
            case "Un":
                setError("");
                setUserName(e.target.value);
                if (e.target.value === "") {
                    setError("user name has left blank");
                }
                break;
            case "EM":
                setError("");
                setEmail(e.target.value);
                if (e.target.value === "") {
                    setError("email has left blank");
                }
                break;
            case "P":
                setError("");
                setPass(e.target.value);
                if (e.target.value === "") {
                    setError("password has left blank");
                }
                break;
            default:
        }
    }
    const successSignUp =async() => {
        // @ts-ignore
        try {
            const response = await axios.get('http://localhost/getid/', {
                params: {
                searchValue: Email,
                },
            });
            // @ts-ignore
            setCookie('Id',response.data[0].UserID);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        // @ts-ignore
        setCookie('Email', Email);
        setFullName("");
        setUserName("");
        setEmail("");
        setPass("");
        navigate("/exercises");
    };
    const signUpSubmit = () => {
        const myArray = FullName.split(" ");
        if (myArray[0]&& myArray[1] && Email !== '' && UserName !== '' && pass !== '') {
            var url = "http://localhost/signUp/";
            const myArray = FullName.split(" ");
            var Data = {
                first: myArray[0],
                last: myArray[1],
                username: UserName,
                email: Email,
                pass: pass,
            }
            axios.post(url, { Data: Data }).then(function (response) {
                response.data === "Success" ? successSignUp():setError(response.data);
            })
                .catch(function (error) {
                    console.error("Error in Axios POST request", error);
                });
        
        }else if(myArray[0] !== ''|| myArray[1] !== '' || !myArray[0] || !myArray[1]){
            setError("Invalid Full Name format ");
        } 
        else {
            setError("All fields are required");
        }
        
    }
    return (
        <>
            <div className='content'>
                <div className="form">
                    <p>
                        {
                            error !== "" ?
                                <span className="error">{error}</span> :
                                <span className=" success">{msg}</ span>
                        }
                    </p>
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your name" onChange={(e) => handleInputChange(e, "FN")} value={FullName} required />
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username" onChange={(e) => handleInputChange(e, "Un")} value={UserName} required />
                    <label>Email</label>
                    <input type="text" placeholder="Enter your email" onChange={(e) => handleInputChange(e, "EM")} value={Email} required />
                    <label>Password</label>
                    <input type="password"  placeholder="Enter your password" onChange={(e) => handleInputChange(e, "P")} value={pass} required />
                    <label></label>
                    <input type="submit" value="Register" className="button" onClick={signUpSubmit} />
                </div>
            </div>
        </>
    )
}
