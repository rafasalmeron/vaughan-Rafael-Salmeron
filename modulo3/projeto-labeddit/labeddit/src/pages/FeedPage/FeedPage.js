import React from 'react'
import Button from '@material-ui/core/Button';
import AlarmIcon from '@material-ui/icons/Alarm';
import IconButton from '@material-ui/core/IconButton';
const FeedPage = () => {
    return (
        <div>
            <h1>FeedPage</h1>
            
            <Button variant="contained"
            color='primary' >
                Send
            </Button>
            <IconButton color="secondary" >
                <AlarmIcon />
            </IconButton>
        </div>
    )
}

export default FeedPage