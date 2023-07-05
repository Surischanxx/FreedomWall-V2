import axios from 'axios'
import { useState,useEffect } from 'react'

export const Comments =()=>{
    const [ comments, setComments ] = useState([])
    const [ isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        const fetchComment =async()=>{
            setIsLoading(true)
            try {
                const env = import.meta.env;
                const url = env.VITE_REACT_SERVER_URL

                const { data } = await axios.get(`${url}/api/comments`)
                setComments(data)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        
        fetchComment()
    },[])

    return {comments,isLoading}
}