export default async function createChat(props: any) {
    const token = localStorage.getItem('token')
    const query = await fetch('http://localhost:8000/api/conversations/start/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            username: props
        })
    })

    if (!query.ok) {
        query.json().then((e) => {
            alert('Проверьте введенные данные.')
        })
    }
}