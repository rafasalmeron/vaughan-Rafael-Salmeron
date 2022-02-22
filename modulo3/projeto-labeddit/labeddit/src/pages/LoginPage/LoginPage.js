import React from 'react'
import { InputConteiner, Logo, ScreenConteiner, SiginUpButton } from './styled'
import logo from "../../assets/logo.png"
import { Button} from '@material-ui/core'
import LoginForm from './LoginForm'
import {useNavigate } from 'react-router-dom'
import { goToSiginUp } from '../../routes/cordinator'


const LoginPage = () => {
    const navigate = useNavigate()
    return (
        <ScreenConteiner>
            <Logo src={logo}/>
            <LoginForm/>
            <InputConteiner>
                <SiginUpButton>
                    <Button
                        onClick={() => goToSiginUp(navigate)}
                        type='submit'
                        fullWidth
                        variant='text'
                        color='primary'
                        margin='normal'
                    >
                        Cadastre-se
                    </Button>
                </SiginUpButton>
            </InputConteiner>
        </ScreenConteiner>
    )
}

export default LoginPage