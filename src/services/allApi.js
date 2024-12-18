import axios from "axios";

const base_url="https://contact-server-mdil.onrender.com"

export const getContactsApi=async()=>{
    return await axios.get(`${base_url}/contacts`)
}

export const addContactApi = async(data)=>{
    return await axios.post(`${base_url}/contacts`,data)
}

export const deleteContactApi = async(id)=>{
    return await axios.delete(`${base_url}/contacts/${id}`)
}

export const updateContactApi = async(id,data)=>{
    return await axios.put(`${base_url}/contacts/${id}`,data)
}

export const fetchContactById = async(id)=>{
    return await axios.get(`${base_url}/contacts/${id}`)
}