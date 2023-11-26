'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import getAllUsers from '../action/getAllUsers';
import useSWR from 'swr';
import styles from '../chats/userList.module.css';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import createChat from '../action/createChat';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function stringToColor(string: string) {
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

function stringAvatar(name: string) {
  return {
      sx: {
          bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}`,
  };
}

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  let { data, error, isLoading } = useSWR('/api/users', getAllUsers)

  const handleCreate = (username: string) => {
    createChat(username)
    handleClose()
  }
  return (
    <div>
      <Button onClick={handleOpen}
        style={{ bottom: '7%', left: '10%', position: 'fixed' }}>
        Добавить чат
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Выберите собеседника:
          </Typography>
          <List dense={dense}>
            {isLoading ? 'Loading....' :
              data?.results.map((user: any) => (
                <ListItem key={user.id}
                  className={styles.avatar}
                  onClick={() => handleCreate(user.username)}>
                  <ListItemAvatar>
                    <Avatar {...stringAvatar(user.username)} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={user.username}
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
              ))
            }
          </List>
        </Box>
      </Modal>
    </div>
  );
}