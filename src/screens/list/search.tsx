import React from 'react'

interface User {
    id: string,
    name: string
}

interface SearchProps {
    users: User[],
    param: {
        id: string,
        projectName: string
    },
    setParam: (param: SearchProps['param']) => void
}

export const Search = ({users, param, setParam}: SearchProps) => {
    return (
        <div>
            <dl>
                <dt><input type="text" value={param.projectName} onChange={evt => setParam({
                    ...param,
                    projectName: evt.target.value
                })} /></dt>
                <dd>
                    <select value={param.id} onChange={evt => setParam({
                        ...param,
                        id: evt.target.value
                    })}>
                        <option value="">项目人</option>
                        {
                            users.map(item => {
                                return <option value={item.id} key={item.id}>{item.name}</option>
                            })
                        }
                    </select>
                </dd>
            </dl>
        </div>
    )
}