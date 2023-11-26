import logout from "./logout"

export default async function getAllUsers(props: any) {
    const token = localStorage.getItem('token')
    const catsList = await fetch('http://localhost:8000/api/users/', {
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