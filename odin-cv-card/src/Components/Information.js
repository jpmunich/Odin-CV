import React, { Component } from 'react';
import CVBody from './CV-Card/Cv-Body';
import CVHeader from './CV-Card/Cv-Header';
import CVDetails from './CV-Card/Cv-Details';

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: "",
            lName: "",
            title: "",
            address: "",
            phoneNumber: "",
            email: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);
    }
    
    handleClick = (e) => {
        const { name, value } = e.target;
        this.setState({ [name] : value});
    }

    handleSubmission = (e) => {
        e.preventDefault(); 
    }

    render() {
        return (
        <div className='information'>
            <form className='form'>
                <input type="text" onChange={this.handleClick} name="fName" placeholder="First Name" />
                <input type="text" onChange={this.handleClick} name="lName" placeholder="Last Name" />
                <input type="text" onChange={this.handleClick} name="title" placeholder="Title" />
                <input type="file" name="photo" />
                <input type="text" onChange={this.handleClick} name="address" placeholder="Address" />
                <input type="text" onChange={this.handleClick} name="phoneNumber" placeholder="Phone #" />
                <input type="text" onChange={this.handleClick} name="email" placeholder="Email" />
                <textarea rows="5" cols="8" name="description" placeholder="Description"></textarea>
                <button type="submit" onSubmit={this.handleSubmission}>Submit</button>
            </form>
            <CVHeader title={this.state.title} />

            <div className='CV-container-minus-header'>
                <CVBody />
                <CVDetails address={this.state.address} phoneNumber={this.state.phoneNumber} email={this.state.email}/>
            </div>
        </div>
        );
    }
}

export default Information;