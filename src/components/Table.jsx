function Table({data}) {

    const renderedRows = data.map((item) => {
        return (
            <tr className= "border-b" key={item.name}>
                <td className="p-3">{item.name}</td>
                <td className="p-3">
                    <div className={`p-3 ${item.color}`}>

                    </div>
                </td>
                <td className="p-3">{item.score}</td>
            </tr>
        )
    })

    return (
    <table className="table-audo border-spacing-2">
        <thead>
            <tr className="border-b-2">
                <th>Fruits</th>
                <th>Color</th>
                <th>Score </th>
            </tr>
        </thead>
        <tbody>
            {renderedRows}
        </tbody>
    </table>
    )
}

export default Table