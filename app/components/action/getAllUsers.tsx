import logout from "./logout";
import { URL_API } from '../../settings';

export default async function getAllUsers(props: any) {
    const token = localStorage.getItem('token')
    const catsList = await fetch(`${URL_API}/api/users/`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + token
        }
    })

    if (!catsList.ok)
        logout()

    const users = await catsList.json()
    return users
} 