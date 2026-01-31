import React from 'react'
import { useState, useEffect } from 'react';
function randomProducts(count) {
    const names = ["iPhone", "Samsung", "Oppo", "Xiaomi", "Nokia", "Sony", "Vivo", "Realme", "Asus", "LG"];
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        name: names[Math.floor(Math.random() * names.length)] + ' ' + (i + 1),
        price: Math.floor(Math.random() * 10000) + 1000,
    }));
}
const PRODUCTS = randomProducts(2000);


function Bai3() {
    const [searchValue, setsearchValue] = useState("");
    const [filter, setfilter] = useState(-1);
    const [sum, setSum] = useState(0)

    const price = [
        [0, 2000],
        [2000, 10000],
        [10000, 50000]
    ]

    function Sum() {
        if (filter !== -1) {
            const newproduct = PRODUCTS.filter((item) => {
                return item.name.includes(searchValue) && (item.price >= price[filter][0] && item.price < price[filter][1])
            })

            return newproduct.reduce((total, item) => total + item.price, 0)
        }
    }

    useEffect(() => {
        const total = Sum()
        setSum(total ? total : 0)
        console.log(searchValue, filter)
    }, [searchValue, filter])
    return (
        <div>
            <div style={{ padding: 10, background: 'green', width: 300 }}>
                Bài 3
            </div>
            <h2>Tim kiem san pham</h2>
            <h4>Thanh tiem kiem</h4>
            <input
                type="text"
                placeholder='tim kiem'
                value={searchValue}
                onChange={(e) => {
                    setsearchValue(e.target.value)
                }}

            />
            <h4>loc</h4>
            {
                price.map((item, index) =>
                    <div key={index}>
                        <input
                            type="checkbox"
                            name={'price' + index}
                            checked={filter === index ? true : false}
                            onChange={() => {
                                if (index !== filter)
                                    setfilter(index)
                                else
                                    setfilter(-1)
                            }}
                        />
                        <label id={'price' + index}>
                            {item.join(" - ")}
                        </label>
                    </div>

                )
            }

            <h3>Title : {sum}</h3>
        </div>
    )
}

export default Bai3

