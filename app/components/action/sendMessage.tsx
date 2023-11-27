import { URL_API } from '../../settings';

export default async function sendMessage(text: any, chat_room: any) {
    if (!chat_room) {
        alert('Выберите чат.')
    } else {
        const token = localStorage.getItem('token')
        const query = await fetch(`${URL_API}/api/messages/create/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                text: text,
                chat_room: chat_room
            })
        })
    }
}