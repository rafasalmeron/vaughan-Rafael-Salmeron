import React from 'react'
import { CircularProgress } from '@material-ui/core'
import {LoadingConteiner} from './styled.js'

const Loading = () => {
    return (
        <LoadingConteiner>
            <CircularProgress/>
        </LoadingConteiner>
    )
}
export default Loading