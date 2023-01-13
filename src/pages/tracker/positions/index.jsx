import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const index = () => {
    const rows = [
        { id: 1, col1: "1", openDate: "1/1/2023" },
        { id: 2, col1: "2", openDate: "2/1/2023" },
        { id: 3, col1: "3", openDate: "12/1/2022" },
    ];

    const columns = [
        { field: "col1", headerName: "Trade #", width: 75 },
        { field: "openDate", headerName: "Date Opened", width: 150 },
        { field: "col3", headerName: "Symbol", width: 150 },
        { field: "col4", headerName: "Exp Date", width: 150 },
        { field: "col5", headerName: "Strike(s)", width: 150 },
        { field: "col6", headerName: "Quantity", width: 150 },
        { field: "col7", headerName: "Type", width: 150 },
        { field: "col8", headerName: "Net Credit", width: 150 },
        { field: "col9", headerName: "Net Debit", width: 150 },
        { field: "col10", headerName: "Date Closed", width: 150 },
        { field: "col11", headerName: "P/L", width: 120 },
        { field: "col12", headerName: "Notes", width: 250, editable: true },
    ];

    return (
        <div style={{ height: 300, width: "100%" }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
};

export default index;
