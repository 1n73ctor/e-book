const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors'); // Import CORS middleware

const app = express();
app.use(cors({ origin: '*' })); // Enable CORS for all routes
app.use(bodyParser.json());

const ZOHO_WEBHOOK_URL = 'https://flow.zoho.com/868933564/flow/webhook/incoming?zapikey=1001.b165f17a50fc2c4f39d204ae35f04fa4.67f4d71d5388b3649f22067fab7d3434&isdebug=false';

app.post('/api', async (req, res) => {

    try {
        const response = await axios.post(ZOHO_WEBHOOK_URL, req.body);
        // console.log('Response from Zoho:', response.data); 

        res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Error from Zoho:', error.message); // Log error message

        // If there's a specific response error, log it too
        if (error.response) {
            console.error('Error data:', error.response.data);
            console.error('Status code:', error.response.status);
        }

        res.status(500).json({ message: 'Error submitting form' });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
