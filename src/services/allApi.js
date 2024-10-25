import axios from "axios";

const base_url="http://localhost:3000"

export const getContactsApi=async()=>{
    return await axios.get(`${base_url}/contacts`)
}

export const addContactApi = async(data)=>{
    return await axios.post(`${base_url}/contacts`,data)
}

export const deleteContactApi = async(id)=>{
    return await axios.delete(`${base_url}/contacts/${id}`)
}

export const updateContactApi = async(id)=>{
    return await axios.put(`${base_url}/contacts/${id}`)
}