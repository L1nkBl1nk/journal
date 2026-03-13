import reactLogo from "../assets/react.svg"
import "./Header-style.css"

export default function Header(){
    return(
        <header>
            <img src = {reactLogo}/>
            <h1>My travel journal</h1>
        </header>
    )
}