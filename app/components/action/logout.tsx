export default function logout(){
    localStorage.removeItem('token')
    window.location.replace('/')
}