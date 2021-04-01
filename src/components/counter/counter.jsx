import Btn from '../btn'
import "./counter.css"
import "../btn/btn.css"
import { useState } from "react"

function Counter() {

    const [count, setCount] = useState(0)
    const changeCount = (num) => {
        setCount(count + num);
    }
    return (
        <div>
            <h6>Count: {count}</h6>
            <button className={"btn, btn-primary"} onClick={() => { changeCount(1) }}> Add 1 </button>
            <button className={"btn, btn-primary"} onClick={() => { changeCount(5) }}> Add 5 </button>
            <button className={"btn, btn-primary"} onClick={() => { changeCount(100) }}> Add 100 </button>
            <button className={"btn, btn-primary"} onClick={() => { changeCount(-100) }}> subtract 100 </button>
            <button className={"btn, btn-primary"} onClick={() => { changeCount(-5) }}> subtract 5 </button>
            <button className={"btn, btn-primary"} onClick={() => { changeCount(-1) }}> subtract 1 </button>
        </div>
    );
}
export default Counter;