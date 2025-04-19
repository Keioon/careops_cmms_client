import React, { useState, useEffect } from "react";
import { Container, Form, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Constants from "../utilities/Constants";
import useUser from "../components/useUser";

const Login = () => {
    const { user, removeUser, setUser } = useUser();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const [showAlert, setShowAlert] = useState(false);
    const [alert, setAlert ] = useState('');
    const navigate = useNavigate()

    const login = () => {
        setAlert('');
        setShowAlert(false);
        let params = {
          email: username,
          password: password,
        };

        const url = Constants.API_URL_EMPLOYEE_LOGIN;

        axios.defaults.headers.common['Authorization'] = Constants.SigningKey;
        if(params.email) {
            axios
                .post(`${url}`, params, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
                )
                .then((response) => {
                    console.log(response);
                    console.log("token: ", response.data.token);
                    // const user = {
                    //     id: response.data.id,
                    //     name: response.data.name,
                    //     surname: response.data.surname,
                    //     email: response.data.email,
                    //     role: response.data.role,
                    //     isActive: response.data.isActive,
                    //     isHeadAdmin: response.data.isHeadAdmin,
                    //     token: response.data.id,
                    // };
                    // window.location.reload();
                    // setUser(user);
                    // if(user.role = 'ROLE_ADMIN') {
                    //     // navigate('/usersList');
                    // } else {
                    //     // navigate(`/userData/${user.id}`);
                    // }
                })
                .catch((err) => {
                    console.log(err);
                    setShowAlert(true)
                    if(err.response && err.response.data && err.response.data.message) {
                        setAlert(err.response.data.message);
                    } else {
                        setAlert('Nieznany błąd.');
                    }
                });
        }
    }

    useEffect(() => {
        if(user) {
            console.log('useEffect');
        //   navigate(`/userData/${user.id}`)
        }
    }, []);

    return (
        <>
            <Container fluid className="login">
                <div className="login-wrapper">
                    <div className="login-header text-center">
                        <h2>Panel logowania</h2>
                    </div>
                    {showAlert && (
                        <Alert variant="danger">{alert}</Alert>
                    )}
                    <Form className="login-inputs" onSubmit={handleSubmit(login)}>
                        <Form.Group className="mb-3 login-mail" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="email" {...register("login")} onChange={(changeEvent) => setUsername(changeEvent.target.value)} required/>
                        </Form.Group>
                        <Form.Group
                            className="mb-3 login-password"
                            controlId="formBasicPassword"
                        >
                            <Form.Control type="password" placeholder="hasło" {...register("password")} onChange={(changeEvent) => setPassword(changeEvent.target.value)} required/>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        ></Form.Group>
                        <div className="login-buttons">
                            <button className="btn btn-black mb-3" type="submit">
                                Zaloguj się 
                            </button>
                            {/* <Link to="/register" className="btn btn-white" role="button">
                                Zarejestruj się
                            </Link> */}
                        </div>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default Login;