import { URL_API } from '../../settings';

export default async function createCat(props: any) {
    const token = localStorage.getItem('token')
    const query = await fetch(`${URL_API}/api/cats/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            name: props.name,
            birth_year: props.birth_year,
            color: props.color,
            breed: props.breed,
            history: props.history,
            image: props.image,
            owner: 9
        })
    })

    if (query.ok) {
        window.location.replace('/cats')
    }
    else {
        query.json().then((e) => {
            alert('Проверьте введенные данные.')
        })
    }
}