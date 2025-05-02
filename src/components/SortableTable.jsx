   import { useState } from "react";
import Table from "./Table";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import UnfoldMoreSharpIcon from '@mui/icons-material/UnfoldMoreSharp';
import useSort from "../hooks/use-sort";

function SortableTable(props) {

    const { config, data } = props

    const {sortOrder, sortBy, sortedData, setSortColumn} = useSort(data, config)   
    const updatedConfig = config.map((column) => {
        if(!column.sortValue){
            return column
        } 
        else{
            return (
                {...column, header: () => 
                <th className="p-0 m-0 align-top cursor-pointer hover:bg-gray-100" onClick={() => {
                    setSortColumn(column.label)
                }}>
                <div className="flex items-center gap-1 p-0 m-0">
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
                </th>}
            )
        }
    })
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