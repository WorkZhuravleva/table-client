import React from "react";
import Row from "./Row";


const Table = ({table, moveRow, deleteRow}) => {

    return (
        <div className='data'>
            <table className='table'>
                <thead>
                <tr>
                    <th>DocType</th>
                    <th>CompanyID</th>
                    <th>Date</th>
                    <th>DocID</th>
                    <th>Sign</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                {table.map((item, index) => <Row key={item.docID}
                                                 info={item}
                                                 index={index}
                                                 moveRow={moveRow}
                                                 deleteRow={deleteRow}
                    />)}
                </tbody>
            </table>
        </div>
    );
}

export default Table;

