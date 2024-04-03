import { useEffect, useState } from "react";
import axios from "axios";


export const useEmailTemplate = (tempstate, userid) => {
    const [loading, setLoading] = useState(true);
    const [templates, setTemplates] = useState({ template : [] });

    useEffect(() => {
        fetchData(new Date(), userid)
    }, [tempstate]);

    const fetchData = (currentdate, id) => {
        setLoading(true);
        const year = currentdate.getFullYear(); 
        const month = String(currentdate.getMonth() + 1).padStart(2, '0'); 
        const day = String(currentdate.getDate()).padStart(2, '0'); 

        const formattedDate = `${year}-${month}-${day}`;  

        axios.post(`${process.env.REACT_APP_API_SERVER}/api/v1/template/getbydate`,  {
            userid : id,
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