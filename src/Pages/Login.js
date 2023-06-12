import React from 'react'
import { ErrorMessage, Formik, Form, Field } from "formik";
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import Img from "../Assets/result.svg"
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    
    const handleLogin = (values) => {
        if (values.email === "said095@hotmail.com" && values.password === "123"){
            localStorage.setItem("@user", JSON.stringify(values.email))
            window.location.reload();
        }else{
            toast.info(`Wrong login details`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        
    }


    return (
        <Container>
            <div className="body">
                <div className="left-login">
                    <img src={Img} alt="login-pic" className="chart" />
                </div>

                <div className="right-login">
                    <div className="card-login">
            
                        <h1>LOGIN</h1>
                        <Formik initialValues={{}} onSubmit={handleLogin}>
                            <Form className="login-form">
                                <div className="form-group">
                                    <label form="email">Username</label>
                                    <Field name="email" type='email' className="form-field" placeholder="Email" />
                                    <ErrorMessage component="span" name="email" className="form-error"/>
                                </div>

                                <div className="form-group">
                                    <label form="email">Password</label>
                                    <Field name="password" type='password' className="form-field" placeholder="Pasword" />
                                    <ErrorMessage component="span" name="password" className="form-error"/>
                                </div>

                                <button className="button" type="submit">
                                    Login
                                </button>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <ToastContainer position='top-right'/>
            </div>
        </Container>
    );
}

const Container = styled.div`
    .body {
        margin: 0;
        width: 100vw;
        height: 100vh;
        background: #052159;
        display: flex;
        justify-content: center;
        align-items: center;
    }
  
    .left-login {
        width: 50vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    .left-login h1 {
        color: #77ffc0;
    }
    
    .right-login {
        width: 50vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .card-login {
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 30px 35px;
        background-color: #113059;
        border-radius: 20px;
        box-shadow: 0px 10px 40px #00000056;
    }

    .login-form{
        width: 60%;
    }
    
    .card-login h1 {
        color: #91B7D9;
        font-weight: 800;
        margin: 0;
    }
    
    .chart{
        width: 80%;
    }
    
    .form-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin: 10px 0px;
    }
    
    .form-field {
        width: 100%;
        border: none;
        border-radius: 10px;
        padding: 15px;
        background-color: #514869;
        color: #f0ffffde;
        font-size: 12pt;
        box-shadow: 0px 10px 40px #00000056;
        box-sizing: border-box;
        outline: none;
    }
    
    .form-group label {
        color: #f0ffffde;
        margin-bottom: 10px;
    
    }
    
    .form-error {
        display: block;
        color: #fff;
        font-size: 0.8em;
    }
    
    .form-field ::placeholder {
        color: #f0ffff94;
    }
    
    .button {
        width: 100%;
        padding: 16px 0px;
        border: none;
        border-radius: 6px;
        outline: none;
        text-transform: uppercase;
        font-weight: 900;
        letter-spacing: 3px;
        cursor: pointer;
        margin-top: 15px;
        background: #B3DAF2;
        color: black;
    }
    
    @media (max-width: 950px){
        .card-login{
            width: 100%;
        }
    }
    
    @media (max-width: 600px){
        .body{
            flex-direction: column;
        }
    
        .left-login {
            width: 100%;
            height: auto;
        }
    
        .right-login {
            width: 100%;
            height: auto;
        }
    
        .card-login {
            width: 90%;
        }
    }
  
`;