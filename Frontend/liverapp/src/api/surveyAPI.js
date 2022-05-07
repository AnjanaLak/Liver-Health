import React from 'react';
import axios from 'axios';


const BASE_URL = 'http://127.0.0.1:5003/';

export const predictFattyLiver=(req)=>{
    return axios({
        method:'POST',
        url:`${BASE_URL}/predictFattyLever`,
        data : req
        
    })

}

// export default axios.create({
//     baseURL:'https://y1t7w9i1xh.execute-api.us-east-2.amazonaws.com/default'
// })

