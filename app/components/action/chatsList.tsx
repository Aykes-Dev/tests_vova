import { URL_API } from '../../settings';

export default async function getChatsList() {
    const token = localStorage.getItem('token')
    const chatsList = await fetch(`${URL_API}/api/conversations/`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + token
        }
    })

    if (!chatsList.ok)
        chatsList.json().then(e => console.log(e))
        //logout()

    const user = chatsList.json()
    return user
}   