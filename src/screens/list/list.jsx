export const List = ({list}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>项目名称</th>
                    <th>负责人</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map(item => {
                        return <tr key={item.id}>
                            <td>{item.projectName}</td>
                            <td>{item.name}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}