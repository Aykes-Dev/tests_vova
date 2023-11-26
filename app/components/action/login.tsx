export default async function singIn(username: any, password: any) {
    console.log(username, password)
    const token = await fetch('http://localhost:8000/api/jwt/create/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'username': username,
            'password': password
        })
    })

    if (token.ok) {
        const res = await token.json()
        localStorage.setItem('token', res.access)
        window.location.replace('/messages')
    }
    else {
        alert('Введен неверный логин/пароль.')
    }
}
