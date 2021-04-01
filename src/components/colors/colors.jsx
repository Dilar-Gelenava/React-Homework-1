import "./colors.css"
import { useState } from "react"
import Btn from "../btn"

function Colors() {
    const [color, setColor] = useState("gray");
    const changeColor = (color) => {
        setColor(color);
    }
    return (
        <div className={color}>
            <Btn color="gray" click={() => { changeColor("gray") }} />
            <Btn color="red" click={() => { changeColor("red") }} />
            <Btn color="yellow" click={() => { changeColor("yellow") }} />
            <Btn color="green" click={() => { changeColor("green") }} />
            <Btn color="blue" click={() => { changeColor("blue") }} />
            <Btn color="purple" click={() => { changeColor("purple") }} />
        </div>
    );
}
export default Colors;