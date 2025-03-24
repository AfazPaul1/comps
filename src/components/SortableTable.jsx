import Table from "./Table";

function SortableTable(props) {

    const { config } = props
    const updatedConfig = config.map((column) => {
        if(!column.sortValue){
            return column
        }
        else{
            return (
                {...column, header: () => <th>{column.label} is sortable</th>}
            )
        }
    })

    return <Table {...props} config={updatedConfig}></Table>
}

export default SortableTable; 