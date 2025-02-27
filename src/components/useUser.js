import { useState } from 'react';
import axios from "axios";

export default function useUser() {
    const getUser = () => {
        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        return user;
    };

    const [user, setUser] = useState(getUser());
    
    const saveUser = (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        const zm = JSON.parse(localStorage.getItem("user")) ?? [];
        console.log(zm);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + zm.token;
        setUser(user);
    };

    const removeUser = () => {
        axios.defaults.headers.common['Authorization'] = '';
        localStorage.clear();
    };

    return {
        removeUser: removeUser,
        setUser: saveUser,
        user: user,
        getUser: getUser,
    }
}
