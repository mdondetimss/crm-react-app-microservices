import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Dashboard1 = () => {
    const [customers, setCustomers] = useState([]);
    const [error, setError] = useState(null);

    // Sample data to show if the API request fails
    const sampleData = [
        { id: 1, name: "John Doe", job: "Software Engineer" },
        { id: 2, name: "Jane Smith", job: "Product Manager" },
        { id: 3, name: "Alice Johnson", job: "UX Designer" }
    ];

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                // Fetching data from the API
                const response = await fetch("/api/users?page=2");
                
                // Check if the response is OK
                if (!response.ok) {
                    //throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                // Attempt to parse response as JSON
                const userDetails = await response.json();
                console.log("Response: ", userDetails);

                const data = userDetails.data.map(user => ({
                    id: user.id,
                    name: `${user.first_name} ${user.last_name}`, // Combine first and last name
                    job: 'N/A' // ReqRes API does not provide job information
                }));

                console.log(data);
                setCustomers(data);
                setError(null); // Clear any previous errors
            } catch (error) {
                console.log("Error - fetch customers: ", error.message);
                setError(error.message);
                setCustomers(sampleData); // Use sample data on error
            }
        };

        fetchCustomers();
    }, []);

    const handleUpdate = (id) => {
        // Implement your update logic here
        alert(`Update clicked for employee ID: ${id}`);
    };

    const handleDelete = (id) => {
        // Implement your delete logic here
        if (window.confirm(`Are you sure you want to delete employee ID: ${id}?`)) {
            setCustomers(customers.filter(customer => customer.id !== id));
            // Optionally, you can also make a DELETE request to your API here
            alert(`Employee ID: ${id} deleted`);
        }
    };

    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                    <h1>Customers</h1>
                    
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Action</th> {/* Action column */}
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer) => (
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.job}</td>
                                    <td>
                                        <Button
                                            variant="primary"
                                            size="sm"
                                            onClick={() => handleUpdate(customer.id)}
                                            className="me-2"
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => handleDelete(customer.id)}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard1;
