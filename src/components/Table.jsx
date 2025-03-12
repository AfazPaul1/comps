function Table({data, config}) {

    const renderedHeaders = config.map((column) => {
        return <th key={column.label}>{column.label}</th>
    })

    const renderedRows = data.map((item) => {
        return (
            <tr className= "border-b" key={item.name}>
                <td className="p-3">{config[0].render(item)}</td >
                <td className="p-3"><div className={`p-3 ${config[1].render(item)}`}></div></td>
                <td className="p-3">{config[2].render(item)}</td>
            </tr>
        )
    })

    return (
    <table className="table-audo border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {renderedHeaders}
            </tr>
        </thead>
        <tbody>
            {renderedRows}
        </tbody>
    </table>
    )
}

export default Table