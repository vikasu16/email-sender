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
                await apicalls(userid, allRecipients)
                 
                setContent('');
                setSubject('');
                setRecipients('');  
                alert('email sent');
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
                'Authorization': 'Bearer ' + localStorage.getItem('_userkey'), // Set your authorization token here
                'Content-Type': 'application/json', // Set the content type as needed
            },
        };

        let totalrecepits = 0;
        for(let i = 0;i < allRecipients.length; i++)
        {
            if(allRecipients[i].trim().length > 0)
            {
                const encodedEmail = encodeMail(currentEmail, allRecipients[i].trim().toLocaleLowerCase(), subject, content);
                await axios.post('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
                    raw : encodedEmail
                    }, config)
                totalrecepits += 1;
            }
        }

        await axios.post('http://127.0.0.1:8787/api/v1/statistic/add', {
                    userid : userid,
                    totalrecepits : totalrecepits
                });

        await axios.post('http://127.0.0.1:8787/api/v1/template/add', {
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