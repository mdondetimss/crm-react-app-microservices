import './postuser.css'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const PostUser = () =>{
    const[formData,setformData] =  useState({
        name:"",
        job:""
    })

    const handleInputChange = (event) =>{
        const {name,value} = event.target;
        setformData({
            ...formData,
            [name]:[value]
        })
    }
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(formData);
        try{
            const respone = await fetch("https://reqres.in/api/users",{
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(formData)
            })
            
            const data = await respone.json();
            console.log("User Created: ",data);
            navigate("/");

        }
        catch (error){
            console.log("Error: " ,error.message)
        }
    }

    
    
    return(
        <>
            <div className="center-form">
                <h1 >Post Customer</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            name="job"
                            placeholder="Enter Job"
                            value={formData.job}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            name="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
        )
}

export default PostUser