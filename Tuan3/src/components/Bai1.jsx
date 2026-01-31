import React, { useState } from 'react'

function Bai1() {
    const [info, setInfo] = useState({ name: '', email: '', age: '' })
    const [infoCu, setInfoCu] = useState({})
    function handleSubmit(e) {
        e.preventDefault();

        const name = e.target[0].value;
        const email = e.target[1].value;
        const age = e.target[2].value;
        setInfo((prev) => {
            setInfoCu(prev);

            console.log(infoCu);
            return { ...prev, name: name, email: email, age: age }
        });
    }
    return (
        <div>
            <div style={{padding:10, background:'green',width:300}}>
                Bài 1
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Nhap ten' /><br />
                <input type="text" placeholder='Email' /><br />
                <input type="number" placeholder='Tuoi' /><br />
                <button type='submit'>Gửi</button>
            </form>
            <div style={{ display: 'flex', gap: 10 }}>
                <div>
                    <b>Giá trị cũ:</b>
                    <ul>
                        <li>{infoCu.name}</li>
                        <li>{infoCu.email}</li>
                        <li>{infoCu.age}</li>
                    </ul>
                </div>
                <div>
                    <b>Giá trị mới:</b>
                     <ul>
                        <li>{info.name}</li>
                        <li>{info.email}</li>
                        <li>{info.age}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Bai1
