import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
function Service()
{
    const [email,setemail] = useState("");
    const [mass,setmass] = useState("");
    const [cookies] = useCookies(['Id']);
    const isAuthenticated = cookies.Id;
    const handleClick = ()=>{
        var Data = {
            id: isAuthenticated,
            email: email,
            mass:mass,
           
        }
        axios.post("http://localhost/su/", { Data: Data }).then(function (response) {
        console.log(response.data);
        })
        .catch(function (error) {
        console.error("Error in Axios POST request", error);
        });
    }
    
    return(
        <section className="section-white">
            <div className="contain">
            <div className="col-md-12-text-center">
                        <h2 className="section-title">
                            Xgym owners
                        </h2>
            </div>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">
                            <img src="public\image\Amr.jpeg" className="team-img" alt="pic"/>
                            <h3>Amr</h3>
                            <div className="team-info">
                                <p>Head of XGym</p>
                                <ul className="team-icon">
                                    <li><a href="https://www.instagram.com/_amr_nabih_/" className="instagram">
                                        <i className="fa fa-instagram"></i>
                                    </a></li>
                                    <li><a href="https://m.facebook.com/amr.nibo.7?mibextid=LQQJ4d" className="facebook">
                                        <i className="fa fa-facebook"></i>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">
                            <img src="public\image\Bero.jpeg" className="team-img" alt="pic"/>
                            <h3>Abraam</h3>
                            <div className="team-info">
                                <p>Manager of social networking in XGym</p>
                                <ul className="team-icon">
                                    <li><a href="https://www.instagram.com/bero__refaat/" className="instagram">
                                        <i className="fa fa-instagram"></i>
                                    </a></li>
                                    <li><a href="https://www.facebook.com/bero.refaat.37?mibextid=LQQJ4d" className="facebook">
                                        <i className="fa fa-facebook"></i>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">
                            <img src="public\image\Omar.jpeg" className="team-img" alt="pic"/>
                            <h3>Omar</h3>
                            <div className="team-info">
                                <p>Manager of XGym's shop</p>
                                <ul className="team-icon">
                                    <li><a href="https://www.instagram.com/3morii74/" className="instagram">
                                        <i className="fa fa-instagram"></i>
                                    </a></li>
                                    <li><a href="https://m.facebook.com/omer.ahmed.5076798?mibextid=LQQJ4d" className="facebook">
                                        <i className="fa fa-facebook"></i>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <section className="section-white">
                <div className="contain">
                    <div className="problems">
                        <h2 className="section-title">Problems & Suggestions</h2>
                    </div>
                    <div className="form-container">
                    <form>
                        <div className="form-group">
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" id="email" onChange={(e)=>setemail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea className="form-control" id="message" onChange={(e)=>setmass(e.target.value)}
// @ts-ignore
                        rows="3" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
                    </form>
                </div>
                </div>
            </section>
        </section>
    )
}
export default Service;