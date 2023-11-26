import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import getChatsList from '../action/chatsList';
import useSWR from 'swr'
import styles from './userList.module.css'

export function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

export function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}`,
    };
}


export default function UserList( props: any ) {
    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(false);
    const [users, setUsers] = useState([])

    useEffect(() => {
        const interval = setInterval(async () => {
            setUsers(await getChatsList())
        }, 2000);
      
        return () => clearInterval(interval); 
      }, [])
    
    return (
        <List dense={dense}>
            { users?.length ? users?.map((chat: any) => (
                <ListItem key={ chat.id } 
                    className={ styles.avatar }
                    onClick={() => props.func(chat.id, chat.to_user)}>
                    <ListItemAvatar>
                        <Avatar {...stringAvatar(chat.to_user)} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={ chat.to_user }
                        secondary={secondary ? 'Secondary text' : null}
                    />
                </ListItem>
                
            ))
                : <div>Список чатов пуст. <br /> </div>
        }
        </List>
    )
}