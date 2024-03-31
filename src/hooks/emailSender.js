import axios from "axios";
import { useEffect, useState } from "react";
import { encodeMail } from "../middleware/EmailEncode";

export const useSender = (statistic , setStatistic, tempstate, setTempstate) => {
    
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
                const currentEmail = localStorage.getItem('_userMail');
                const config = {
                    headers: {
                      'Authorization': 'Bearer ' + localStorage.getItem('_userkey'), // Set your authorization token here
                      'Content-Type': 'application/json', // Set the content type as needed
                    },
                };
                allRecipients.forEach(rec => {
                    const encodedEmail = encodeMail(currentEmail, rec, subject, content);
                    axios.post('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
                        raw : encodedEmail
                    }, config)
                    .then(res => {
                    })
                    .catch(error => {
                    })
                });

                setTimeout(() => {                
                    axios.post('http://127.0.0.1:8787/api/v1/statistic/add', {
                        userid : "90b5d03a-2300-478f-8fdf-88972aac6e2d",
                        totalrecepits : totalrecepits
                    }).then(res => {
                        console.log("added statistic");
                        setStatistic(!statistic)
                    })

                    axios.post('http://127.0.0.1:8787/api/v1/template/add', {
                        userid : "90b5d03a-2300-478f-8fdf-88972aac6e2d",
                        subject : subject,
                        content : "dummy content"
                    }).then(res =>{
                        console.log("added template")
                        setTempstate(!tempstate)
                    })
                    setContent('');
                    setSubject('');
                    setRecipients('');  
                    alert('email sent');
                }, 1000);
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
        subject,
        recipients,
        setRecipients,
        setSubject,
        setContent,
        saveData
    }
}