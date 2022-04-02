import axios from "axios"
import { useEffect, useState } from "react"

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)
    
    useEffect(()=>{
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem('tokenLabeddit')
            }
        })
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err)
            alert('Ocorreu um erro, try again!')
        })
    }, [url])
    return (data)
}

export default useRequestData