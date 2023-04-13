import { useSelector } from "react-redux";
import { getAllTables } from "../../../redux/tablesRedux";
import { ListGroup, ListGroupItem, Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
    const tables = useSelector(getAllTables);

    console.log(tables);

    return (
        <ListGroup className="gap-3">
            <h1 className="my-3">All tables</h1>
            {tables.map(table => <ListGroupItem className="px-0" key={table.id} >
                <Stack direction="horizontal">
                    <h3 className="me-4">Table {table.id}</h3>
                    <span className="fw-bold me-1">Status:</span>
                    <span>{table.status}</span>
                    <Link className="ms-auto" to={`/table/${table.id}`}>
                        <Button variant="primary">Show more</Button>
                    </Link>
                </Stack>
            </ListGroupItem>)}
        </ListGroup>
    )
}

export default Home;