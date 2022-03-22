import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToFeed } from "../routes/cordinator"



const useUnProtectedPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('tokenLabeddit')
        if (token){
            goToFeed(navigate)
        }

    }, [navigate])
}

export default useUnProtectedPage