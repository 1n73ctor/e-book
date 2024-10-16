import type { Context } from "@netlify/functions";
import axios from "axios";

const ZOHO_WEBHOOK_URL = 'https://flow.zoho.com/868933564/flow/webhook/incoming?zapikey=1001.b165f17a50fc2c4f39d204ae35f04fa4.67f4d71d5388b3649f22067fab7d3434&isdebug=false';

export default async (req: Request, context: Context) => {

    try {
        // console.log(await req.json())
        const response = await axios.post(ZOHO_WEBHOOK_URL, await req.json());
        console.log('Response from Zoho:', response.data); 

        return new Response("Success")
    } catch (error) {
        console.error('Error from Zoho:', error.message); // Log error message

        // If there's a specific response error, log it too
        if (error.response) {
            console.error('Error data:', error.response.data);
            console.error('Status code:', error.response.status);
        }

    return new Response("something went wrong!")
    
    }
  }