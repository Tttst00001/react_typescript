import React, { useState, useEffect } from "react"
import { Search } from './search'
import { List } from './list'
import { cleanObject, useMount, useDebounce } from "utils"
import  qs from 'qs';
const apiUrl = process.env.REACT_APP_API_URL

export const ListHome = () => {
    const [param, setParam] = useState({
        projectName: '',
        id: ''
    })
    const [users, SetUsers] = useState([]) // table 数据
    const [list, SetList] = useState([]) // table 数据

    const debounceParam = useDebounce(param, 1000)
    useEffect(() => {
        fetch(`${apiUrl}/list?${qs.stringify(cleanObject(debounceParam))}`).then(async res => {
            if (res.ok) {
                SetList(await res.json())
            }
        })
    }, [debounceParam])

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async res => {
            if (res.ok) {
                SetUsers(await res.json())
            }
        })
    })

    return <div>
        <Search param={param} users={users} setParam={setParam} />
        <List list={list} />
    </div>
}