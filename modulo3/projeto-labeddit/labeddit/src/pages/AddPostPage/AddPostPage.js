import Typography  from '@material-ui/core/Typography'
import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { ScreenConteiner } from '../LoginPage/styled'




const AddPostPage = () => {
    useProtectedPage()
    return (
        <ScreenConteiner>
            <div>
                <Typography gutterBottom variant={'h4'} color={'primary'}>
                    Adicionar Post
                </Typography>
            </div>
        </ScreenConteiner>
    )
}

export default AddPostPage