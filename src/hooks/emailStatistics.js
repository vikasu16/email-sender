import axios from "axios";
import { useEffect, useState } from "react";

export const useStatistics = (stateChange, userid) => {
    const [loading, setLoading] = useState(true);
    const [mailDetails, setMailDetails] = useState({ totalMails : 0, totalTemplates : 0 });

    useEffect(() => {
        fetchData();
    },[stateChange]);

    
    const fetchData = () => {
        setLoading(true);

        axios.get(`${process.env.REACT_APP_API_SERVER}/api/v1/template/${userid}`)
        .then(tempRes => {

            axios.get(`${process.env.REACT_APP_API_SERVER}/api/v1/statistic/${userid}`)
            .then(res => {
                setMailDetails({...mailDetails, totalTemplates : tempRes.data.totalValue , totalMails : res.data.totalValue})
                setLoading(false);
            });
        });
    }

    return {
        loading,
        mailDetails
    }
} 