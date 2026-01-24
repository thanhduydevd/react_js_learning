import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)
    const plus = () => {
        setCount(count + 1)
    }

    const minus = () => {
        if (count > 0) {
            setCount(count - 1)
        } else {
            alert("Khong duoc be hon 0")
        }
    }

    return (
        <>
            <header style={{ background: "green", padding: "5px" }}>
                <h5>Bài 2: Counter</h5>
            </header>
            <div>
                <p style={count > 10 ? { color: "red" } : { color: "white" }}>Số: {count}</p>
                <div style={{ display: 'flex', gap: 1 }}>
                    <button onClick={plus}>+</button>
                    <button onClick={minus}>-</button>
                    <button onClick={() => setCount(count - count)}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Counter