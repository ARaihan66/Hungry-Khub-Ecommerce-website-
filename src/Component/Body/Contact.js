import React, { Component } from 'react';
//import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            pno: "",
            fback: "",
            check: false,
            option: "Cell Phone"
        }
        this.inputChange = this.inputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    inputChange = event => {
        const name = event.target.name;
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        this.setState({
            [name]: value
        })
    }

    submitForm = event => {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container card mt-2">
                <h3>Send Your Feedback</h3>
                <form onSubmit={this.submitForm}>
                    <div className='row'>
                        <div class="mb-3 mt-3 col-4">
                            <label for="fname" >FirstName:</label>
                        </div>
                        <div className='col-8 mb-3 mt-3'>
                            <input type="text" class="form-control" id="fname" placeholder="Enter first name" name="fname" value={this.state.fname} onChange={this.inputChange} />
                        </div>
                    </div>

                    <div className='row'>
                        <div class="mb-3 mt-3 col-4">
                            <label for="lname" >LastName:</label>
                        </div>
                        <div className='col-8 mb-3 mt-3'>
                            <input type="text" class="form-control" id="lname" placeholder="Enter last name" name="lname" value={this.state.lname} onChange={this.inputChange} />
                        </div>
                    </div>

                    <div className='row'>
                        <div class="mb-3 mt-3 col-4">
                            <label for="email" >Email:</label>
                        </div>
                        <div className='col-8 mb-3 mt-3'>
                            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.inputChange} />
                        </div>
                    </div>

                    <div className='row'>
                        <div class="mb-3 mt-3 col-4">
                            <label for="pNo" >Phone No.:</label>
                        </div>
                        <div className='col-8 mb-3 mt-3'>
                            <input type="tel" class="form-control" id="pNo" placeholder="Enter phone number" name="pno" value={this.state.pno} onChange={this.inputChange} />
                        </div>
                    </div>

                    <div className='row'>
                        <div class="mb-3 mt-3 col-4">
                            <label for="pNo" >Your Feedback: </label>
                        </div>
                        <div className='col-8 mb-3 mt-3'>
                            <textarea class="form-control" id="pNo" placeholder="Express your opinion...." name="fback" value={this.state.fback} onChange={this.inputChange} />
                        </div>
                    </div>

                    <div className='row'>
                        <div class="mb-3 mt-3 col-4">
                        </div>
                        <div className='mb-3 mt-3 col-8'>
                            <input type="checkbox" name="check" checked={this.state.check} onChange={this.inputChange} />
                            <label className='ml-2'>May we contact with you</label>
                            <select class="form-select ml-5" name="option" onChange={this.inputChange}>
                                <option value="Cell Phone">Cell Phone</option>
                                <option value="Email">Email</option>
                                <option value="Physical Address">Physical Address</option>
                            </select>
                        </div>
                    </div>
                    <input type="submit" className='mb-4' value="Send Feedback" />
                </form>
            </div>
        );
    }
}

export default Contact;