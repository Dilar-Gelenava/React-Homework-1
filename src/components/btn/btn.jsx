import "./btn.css"
function Btn({ color, click }) {
    return (
        <button className={color} onClick={click}>
            {color}
        </button >
    );
}

export default Btn;