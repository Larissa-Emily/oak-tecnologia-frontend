import {Container} from "./styled.js"
import Oak_logo from "../../Assets/oakfull.png"

export default function Menu(){
    return (
        <Container>
            <img src={Oak_logo} alt= "Oak tech logo"/>
            <ul>
                <li><a href="https://oak.technology/" target="blank">Site empresa</a></li>
            </ul>
        </Container>
    )
}