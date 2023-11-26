import logout from "./logout"

export default async function getCats(props: any) {
    const token = localStorage.getItem('token')
    if (props !== 'undefined') {
        console.log(props)
    }
    const catsList = await fetch(`http://localhost:8000${props}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + token
        }
    })

    if (!catsList.ok)
        logout()

    const user = await catsList.json()
    return user
} 