import { URL_API } from '../../settings';

export default async function registration(username: any, password: any, email: any) {
    console.log(username, password, email)
    const token = await fetch(`${URL_API}/api/users/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'username': username,
            'password': password,
            'email': email
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
