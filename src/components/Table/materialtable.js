import React, { Component } from 'react';
import { DataGrid, ToolbarOptions } from "tubular-react";
import columns from "./columns";
import localData from "./data.json";
import "./table.css"
//import AddIcon from '@material-ui/icons/Add';
//import IconButton from '@material-ui/core/IconButton';

export default class CompanyData extends Component {
    
    render() {
        const toolbarOptions = new ToolbarOptions({
            advancePagination: false,
            bottomPager: false,
            exportButton: true,
            printButton: true,
            searchText: true,
            topPager: true,
          });

        return (
            
            <DataGrid
                gridName="Tubular-React"
                columns={columns}
                dataSource={localData}
                toolbarOptions={toolbarOptions}
            />

        );
    };
}