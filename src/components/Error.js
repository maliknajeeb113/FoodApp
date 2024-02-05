import { useRouteError } from "react-router-dom"

const Error = () => {

    const err = useRouteError()
    console.log(err)

    return(
        <div>
            <h1>{err.status==404?"Ye mai Kahan aa gaya":"Galat Jawab"}</h1>
            <h2>{err.status} : {err.statusText}</h2>

        </div>
    )
}

export default Error