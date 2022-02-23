import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/cordinator"



const useProtectedPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('tokenLabeddit')
        if (!token){
            goToLogin(navigate)
        }

    }, [navigate])
}

export default useProtectedPage