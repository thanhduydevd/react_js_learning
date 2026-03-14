import React, { useEffect } from 'react'
import { useState } from 'react';
function Bai1() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    var url = 'https://jsonplaceholder.typicode.com/users';


    useEffect(() => {
        async function fetch_data_await() {
            try {
                var featch = await fetch(url);
                var data = await featch.json();
                setData(data);
                setError(false)
            } catch (error) {
                setError(true)
            }finally{
                setLoading(false)
            }

            
        }

       setTimeout(() =>{
        fetch_data_await();
       }, 2000)


        // var fetchdata = fetch(url);
        // fetchdata.then((response) => {
        //     return response.json();
        // }).then((data) => {
        //     setData(data);
        // });
    }, []);

    
    return (
        <div>
            <h1>Danh sách tên và email</h1>
            
                {
                    loading ? "Loading..." : error ? 
                    (<div style={{color:"red"}}>Error</div>) :
                    (
                        data.map((item) => {
                            return (
                                <ul key={item.id} style={{ listStyle: 'none', textAlign: 'left' }}>
                                    <li>Tên: {item.name}</li>
                                    <li>Email: {item.email}</li>
                                </ul>
                            )
                        })
                    )
                }
        </div>
    )
}

export default Bai1
