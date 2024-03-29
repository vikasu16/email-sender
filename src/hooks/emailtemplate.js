import { useEffect, useState } from "react";
import axios from "axios";

export const useEmailTemplate = () => {
    const [loading, setLoading] = useState(true);
    const [templates, setTemplates] = useState({ template : [] });

    useEffect(() => {
        fetchData(new Date())
    }, []);

    const fetchData = (currentdate) => {
        setLoading(true);
        const year = currentdate.getFullYear(); 
        const month = String(currentdate.getMonth() + 1).padStart(2, '0'); 
        const day = String(currentdate.getDate()).padStart(2, '0'); 

        const formattedDate = `${year}-${month}-${day}`;  

        axios.post('http://127.0.0.1:8787/api/v1/template/getbydate',  {
            userid : "90b5d03a-2300-478f-8fdf-88972aac6e2d",
            requesteddate : formattedDate.toString()
        }).then(res => {
            setTemplates({...templates, template : res.data.templates });
            setLoading(false);
        });
    }

    return {
        loading,
        templates,
        fetchData
    }
}