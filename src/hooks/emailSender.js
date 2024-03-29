import axios from "axios";
import { useEffect, useState } from "react";

export const useSender = (statistic , setStatistic) => {
    
    const [recipients, setRecipients] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const saveData = () => {
        var valid = true;
        var totalrecepits = 0;
        if(recipients && subject && content)
        {  
           const allRecipients = recipients.split(';');
           allRecipients.forEach((email) => {
                if(email.length > 0)
                {
                    if(!emailRegex.test(email.trim().toLocaleLowerCase().toString()))
                    {
                        valid = false;
                    }
                    else{
                        totalrecepits += 1;
                    }
                }
           })
           if(valid)
           {
                setStatistic(!statistic)
                // axios.post('http://127.0.0.1:8787/api/v1/statistic/add', {
                //     userid : "90b5d03a-2300-478f-8fdf-88972aac6e2d",
                //     totalrecepits : totalrecepits
                // }).then(res => {
                //     console.log("added statistic");
                // })

                // axios.post('http://127.0.0.1:8787/api/v1/template/add', {
                //     userid : "90b5d03a-2300-478f-8fdf-88972aac6e2d",
                //     subject : subject,
                //     content : "dummy content"
                // }).then(res =>{
                //     console.log("added template")
                // })

           }
           else{
                alert('Email is not valid')
           }
        }
        else{
            alert('Please provide value values');
        }

    }

    return {
        content,
        setRecipients,
        setSubject,
        setContent,
        saveData
    }
}