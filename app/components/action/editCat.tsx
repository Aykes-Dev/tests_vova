export default async function editCat(props: any) {
    const token = localStorage.getItem('token')
    const query = await fetch(`http://localhost:8000/api/cats/${props.id}/`, {
        method: 'PUT',
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
            owner: 9,
            image: props.image
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