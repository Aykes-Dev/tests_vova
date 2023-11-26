import logout from "./logout"

export default async function deleteCats(props: any) {
    const token = localStorage.getItem('token')
    const catsList = await fetch(`http://localhost:8000/api/cats/${props.id}/`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + token
        }
    })

    if (!catsList.ok)
        logout()

    window.location.replace('/cats')
} 