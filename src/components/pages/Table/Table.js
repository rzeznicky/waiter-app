import { useSelector } from "react-redux";
import { getTableById } from "../../../redux/tablesRedux";
import { useParams } from 'react-router';

const Table = () => {
    const tableId = useParams();
    const tableData = useSelector(state => getTableById(state, tableId));

    console.log(tableData);
    return (
        <h2>Table component</h2>
    )
}

export default Table;