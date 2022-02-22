import React from 'react'
import { InputConteiner} from './styled'
import { Button, TextField } from '@material-ui/core'
import useForm from '../../hooks/UseForm'
const LoginForm = () => {
    const [form, onChange, clear] = useForm({email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    return (
        
            <InputConteiner>
                <form onSubmit={onSubmitForm}>
                    <TextField 
                        type={"email"}
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label="E-mail"
                        variant={'outlined'}
                        fullWidth
                        margin={"normal"}
                        required
                    />
                    <TextField 
                        type={'password'}
                        name={'password'}
                        value={form.password}
                        onChange={onChange}
                        label='Senha'
                        variant='outlined'
                        fullWidth
                        margin='normal'
                        required
                    />
                    <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    margin='normal'
                    >Login</Button>
                </form>
            </InputConteiner>
    )
}

export default LoginForm