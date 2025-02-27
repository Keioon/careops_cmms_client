import React, {useEffect, useState} from "react";
import { Navbar, Nav, Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../components/useUser";


const Navigation = () => {
    const { user, removeUser, getUser } = useUser();
    const [account, setAccount] = useState(false);
    const navigate = useNavigate();

    const accFunction = () => {
        if(getUser()) {
          setAccount((prevState) => !prevState)
        } else {
          navigate('/login');
        }
      }

    const logoutFunction = () => {
        removeUser();
        setAccount(false);
        navigate('/login');
    }



    useEffect(() => {
        if (getUser()) {
            setAccount(true);
        } else {
            setAccount(false);
        }
    }, [user]);

    useEffect(() => {
        getUser();
    }, [account]);

    return (
        <Navbar bg="black" expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {account ? (
                    user ? (
                        <Nav className="ms-auto nav-links account">
                            <Nav.Link onClick={() => logoutFunction()}>
                                <img src="/img/logout.svg" alt=" " />
                                Wyloguj
                            </Nav.Link>
                            <Button onClick={() => accFunction()}>
                                <img src="/img/account.svg" alt="login" />
                            </Button>
                        </Nav>
                    ) : (
                        <>
                            {
                                window.location.reload()
                            }
                        </>
                    )
                ) : (
                    <Nav className="ms-auto nav-links">
                        {/* <Nav.Link as={Link} to="/usersList">
                            <img src="/img/list-projects.svg" alt="projects-list" />
                            Lista użytkowników
                        </Nav.Link>
                        <Nav.Link as={Link} to="/teachersList">
                            <img src="/img/list-projects.svg" alt="projects-list" />
                            Ranking wykładowców
                        </Nav.Link> */}
                        <Button onClick={() => accFunction()}>
                            <img src="/img/account.svg" alt="login" />
                        </Button>
                    </Nav>
                )}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;