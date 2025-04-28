import { useState } from "react";
import Table from "./Table";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import UnfoldMoreSharpIcon from '@mui/icons-material/UnfoldMoreSharp';

function SortableTable(props) {

    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    const { config, data } = props

    const handleClick = (label) => {

        if( sortBy && label !== sortBy){
            setSortOrder('asc')
            setSortBy(label)
            return;
        }

        if (sortOrder === null) {
            setSortOrder('asc')
            setSortBy(label)
        } else if(sortOrder === 'asc'){
            setSortOrder('desc')
            setSortBy(label)
        }else if(sortOrder === 'desc'){
            setSortOrder(null)
            setSortBy(null)
        }
        
        }
        
    const updatedConfig = config.map((column) => {
        if(!column.sortValue){
            return column
        } 
        else{
            return (
                {...column, header: () => 
                <th className="p-0 m-0 align-top cursor-pointer hover:bg-gray-100" onClick={() => {
                    handleClick(column.label)
                }}>
                <div className="flex items-center gap-1 p-0 m-0">
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
                </th>}
            )
        }
    })

    let sortedData = data

    if (sortOrder && sortBy) {
        const {sortValue} = config.find((column) => column.label === sortBy)

        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a)
            const valueB = sortValue(b)

            const reverseOrder = sortOrder === 'asc' ? 1: -1

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder
            }else {
                return (valueA - valueB) * reverseOrder
            }
        })
    }
    return <div>
        {sortOrder} - {sortBy}
        <Table {...props} data={sortedData} config={updatedConfig}></Table>
        </div>
}

function getIcons(label, sortBy, sortOrder) {


    if (label !== sortBy) {
        return (
            <div className="flex flex-col items-center leading-none">
            <UnfoldMoreSharpIcon />
            </div>
        )
    } else if(sortOrder === 'asc') {
        return (
            <div>
                <ArrowDropUpIcon />
            </div>
        )
    }else if(sortOrder === 'desc') {
        return (
            <div>
                <ArrowDropDownIcon />
            </div>
        )
    }
    
}

export default SortableTable; 