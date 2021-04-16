import {React,useState} from 'react';
import './Form.css';

function Form(props) {

    const [enteredName,setEnteredName] = useState('');
    const [enteredEmail,setEnteredEmail] = useState('');
    const [enteredNumber,setEnteredNumber] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value); 
    }

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value); 
    }

    const numberChangeHandler = (event) => {
        setEnteredNumber(event.target.value); 
    }

    function submitHandler(event) {
        event.preventDefault();

        const data = {
            name : enteredName,
            email : enteredEmail,
            number : enteredNumber,
        };

        props.onSubmitData(data);
        setEnteredName('');
        setEnteredEmail('');
        setEnteredNumber('');
    }

    return (
        <div className="form-group col-md-6 border"> 
        <h2> Fill User Detail :  </h2>
            <form className="" onSubmit = {submitHandler}>
                <div className="">
                    <div className = "p-2">
                        <input className="form-control" type="text" value={enteredName} onChange = {nameChangeHandler} placeholder="Enter Name" required ></input>
                    </div>

                    <div className = "p-2">
                        <input className="form-control" type="email" value={enteredNumber} onChange = {numberChangeHandler} placeholder="Enter Email" required ></input>
                    </div> 

                    <div className = "p-2">
                        <input type="text" className="form-control" value={enteredEmail} onChange = {emailChangeHandler} placeholder="Enter Number" required></input>
                    </div>  
                </div>
                <div className = "p-2">
                    <button type="submit" className="btn btn-primary" > Add User </button>
                </div>
            </form>
        </div>
    )
}

export default Form;