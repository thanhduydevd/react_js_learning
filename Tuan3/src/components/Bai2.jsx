import React, { useEffect, useState } from 'react'

function Bai2() {
    

    const [time, setTime] = useState({ gio: '', phut: '', giay: '' });
    useEffect(() => {
        const updateTime = () => {
            const getTime = new Date();

            const gio = getTime.getHours();
            const phut = getTime.getMinutes();
            const giay = getTime.getSeconds();
            setTime({ gio: gio, phut: phut, giay: giay });

            console.log(getTime.getHours());
        }
        setTimeout(updateTime, 1000);
    });


    return (
        <div>
            <div style={{ padding: 10, background: 'green', width: 300 }}>
                Bài 2
            </div>
            <div>
                <b>Bây giờ là: {time.gio} giờ, {time.phut} phút, {time.giay} giây.</b>
            </div>
        </div>
    )
}

export default Bai2
