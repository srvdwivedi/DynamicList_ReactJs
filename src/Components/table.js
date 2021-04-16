import React, {useMemo} from 'react';


function Table(props){
    return(
        <>
        {props.item.map(data => <tr>
            <td> {data.name}</td>
            <td>{data.email}</td>
            <td>{data.number}</td>
        </tr> )}
        </>
    );
} 

export default Table;

