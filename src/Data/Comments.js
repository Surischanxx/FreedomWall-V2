import axios from 'axios'
import { useState,useEffect } from 'react'

export const Comments =()=>{
    const [ comments, setComments ] = useState([])

    useEffect(()=>{
        const fetchComment =async()=>{
            try {
                const env = import.meta.env;
                const url = env.VITE_REACT_SERVER_URL

                const { data } = await axios.get(`${url}/api/comments`)
                setComments(data)
            } catch (error) {
                console.log(error)
            }
        }
        
        fetchComment()
    },[])

    return comments
}