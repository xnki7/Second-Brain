import axios from "axios";
import { useState, useEffect } from "react";
import { BACKEND_URL } from '../config';

export function useContent() {
    const [contents, setContents] = useState([]);

    useEffect(() => {
        axios.get(BACKEND_URL + "/api/v1/content", {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((response) => {
            setContents(response.data);
            console.log(response);
        })
    }, []);

    return contents;
}