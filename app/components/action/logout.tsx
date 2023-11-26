import { redirect } from "next/navigation"

export default function logout(){
    localStorage.removeItem('token')
    window.location.replace('/')
}