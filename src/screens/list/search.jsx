export const Search = ({users, param, setParam}) => {
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