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

export const searchUser = (req) => {
    return axios({
        method : 'POST',
        url : `${BASE_URL}/login`,
        data : req
    })
}

export const registerUser = (req) => {
    return axios({
        method : 'POST',
        url : `${BASE_URL}/register`,
        data : req
    })
}
