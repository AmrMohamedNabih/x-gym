import React, { useEffect, useState } from 'react'
import './login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Cookies, useCookies } from 'react-cookie';

export default function login() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    const [cookies, setCookie,romvecookie] = useCookies(['user']);

    useEffect(() => {
        setTimeout(() => {
            setMsg("");
        }, 5000)
    }, [msg]);


    const handleInputChange = (e, type) => {
        switch (type) {
            case "user":
                setError("");
                setUser(e.target.value);
                if (e.target.value === "") {
                    setError("Username has left blank");
                }
                break;
            case "pass":
                setError("");
                setPass(e.target.value);
                if (e.target.value === "") {
                    setError("password has left blank");
                }
                break;
            default:
        }
    }
    const navigate = useNavigate();
    const loginSubmit = async () => {
        if (user !== '' && pass !== '') {
            var url = "http://localhost/login/";
            var Data = {
                email: user,
                pass: pass,
            }
            axios.post(url, { Data: Data })
                .then(function (response) {
                    response.data === "Success" ?  succesLogin(): setError(response.data);
                })
                .catch(function (error) {
                    console.error("Error in Axios POST request", error);
                });
        } else {
            setError("All fields are required");
        }
    }
    const succesLogin = async()=>{
        // @ts-ignore
        try {
            const response = await axios.get('http://localhost/getid/', {
                params: {
                searchValue: user,
                },
            });
            // @ts-ignore
            setCookie('Id',response.data[0].UserID);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        // @ts-ignore
        setCookie('Email', user);
        navigate('/exercises');
    };

    return (
        <div className='content'>
            <div className="form">
                <p>
                    {
                        error !== "" ?
                            <span className="error">{error}</span> :
                            <span className=" success">{msg}</ span>
                    }
                </p>
                <label>Email</label>
                <input type="text" value={user} onChange={(e) => handleInputChange(e, "user")}></input>
                <label>Password</label>
                <input type="password" value={pass} onChange={(e) => handleInputChange(e, "pass")} />
                <label></label>
                <input type="submit" defaultValue="Login" className="button" onClick={loginSubmit}></input>
                <p>to create new accoun : <a href="/signUp">signUp</a></p>

            </div>
        </div>
    )
}
