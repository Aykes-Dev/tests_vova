import { redirect } from "next/navigation"

export default function Redirect(props: any) {
    redirect(props.to)
    return(
        <></>
    )
}