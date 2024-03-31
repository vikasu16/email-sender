const generateEmailTemplate = (from, to, subject, content) => `From: ${from}
To: ${to}
Subject: ${subject}
Content-Type: text/html; charset=UTF-8

${content}`;

const encodeToBase64Url = (text) => {
    const base64 = btoa(text); 
    const base64Url = base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, ''); // Base64url encoding
    return base64Url;
};

const decodeFromBase64Url = (base64Url) => {
    const paddedBase64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const base64 = decodeURIComponent(escape(atob(paddedBase64)));
    return base64;
};

export const encodeMail = (from, to, subject, content) => {
    const templateString = generateEmailTemplate(from, to, subject, content);
    const encodedEmail = encodeToBase64Url(templateString);
    return encodedEmail;
}