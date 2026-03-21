import { useEffect, useState } from 'react'

export default function Bai1() {
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [select, setSelect] = useState("all")


    const [filterSearch, setFilterSearch] = useState([])
    const [userId, setUserId] = useState([])

    var url = 'https://jsonplaceholder.typicode.com/posts';

    function search(value, sel) {
        const arr = data.filter((item) => {
            const isvalue = value == "" ? true : item.title.includes(value);
            const isSelect = sel == "all" ? true : item.userId == parseInt(sel)
            return isvalue && isSelect;
        })

        setFilterSearch(arr)
    }


    useEffect(() => {
        async function fetchData() {
            var fetchDL = await fetch(url);
            var data = await fetchDL.json();

            setData(data);
            setFilterSearch(data)
            setUserId(createOption(data))

        }

        fetchData();
    }, []);

    function handleSearch(e) {
        setSearchValue(e.target.value);

        search(e.target.value, select);
    }

    function createOption(arr) {
        const newArr = []
        for (let i of arr) {
            const isActive = newArr.includes(i.userId)
            if (!isActive) {
                newArr.push(i.userId)
            }
        }

        return newArr;
    }

    function handleFilter(e) {
        setSelect(e.target.value)
        search(searchValue, e.target.value);
    }
    return (
        <>
            userId:
            <select value={select} onChange={handleFilter}>
                <option value="all">all</option>
                {

                    userId.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))
                }
            </select>

            <input type="text" value={searchValue} placeholder='Search' onChange={handleSearch} />
            {filterSearch.map((item) => (
                <div key={item.id} style={{ display: 'flex' }}>
                    <p>{item.title}</p>
                    <p style={{ color: 'red' }}>| userId: {item.userId}</p>
                </div>
            ))
            }
        </>
    )
}
