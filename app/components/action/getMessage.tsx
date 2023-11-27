import { URL_API } from '../../settings';

export default async function getMessage(props: any) {
    const token = localStorage.getItem('token')
    const chatsList = await fetch(`${URL_API}${props}`, {
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

    const messages = await chatsList.json()
    return messages.results
}   