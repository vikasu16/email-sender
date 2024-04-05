import axios from "axios";
import { useEffect, useState } from "react";
import { encodeMail } from "../middleware/EmailEncode";

export const useSender = (statistic , setStatistic, tempstate, setTempstate) => {
    
    const [recipients, setRecipients] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const saveData = async (userid) => {
        setLoading(true);
        var valid = true;
        if(recipients && subject && content)
        {  
           const allRecipients = recipients.split(';');
           allRecipients.forEach((email) => {
                if(email.trim().length > 0)
                {
                    if(!emailRegex.test(email.trim().toLocaleLowerCase().toString()))
                    {
                        valid = false;
                    }
                }
           })
           if(valid)
           {
                try{
                    await apicalls(userid, allRecipients) 
                    alert('email sent');
                }
                catch(e)
                {
                    alert('error occured while sending mail!!')
                }
                setContent('');
                setSubject('');
                setRecipients('');  
           }
           else{
                alert('Email is not valid')
           }
        }
        else{
            alert('Please provide value values');
        }
        setLoading(false);
    }

    const apicalls = async(userid, allRecipients) => {
        const currentEmail = localStorage.getItem('_userMail');
        const config = {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('_userkey'), 
                'Content-Type': 'application/json', 
            },
        };

        let totalrecepits = 0;
        for(let i = 0;i < allRecipients.length; i++)
        {
            if(allRecipients[i].trim().length > 0)
            {
                const encodedEmail = encodeMail(currentEmail, allRecipients[i].trim().toLocaleLowerCase(), subject, content);
                await axios.post(process.env.REACT_APP_GOOGLE_SERVER, {
                    raw : encodedEmail
                    }, config)
                totalrecepits += 1;
            }
        }

        await axios.post(`${process.env.REACT_APP_API_SERVER}/api/v1/statistic/add`, {
                    userid : userid,
                    totalrecepits : totalrecepits
                });

        await axios.post(`${process.env.REACT_APP_API_SERVER}/api/v1/template/add`, {
                        userid : userid,
                        subject : subject,
                        content : content
                    });
        
        setStatistic(!statistic)
        setTempstate(!tempstate)

    }

    return {
        loading,
        content,
        subject,
        recipients,
        setRecipients,
        setSubject,
        setContent,
        saveData
    }
}