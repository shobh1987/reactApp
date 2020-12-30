import React, { useState } from 'react';
import { Countries } from "./../common/Sdata";
import DatePicker from "react-datepicker";
import { } from "./../../node_modules/react-datepicker/dist/react-datepicker.min.css";

const SignUpForm = () => {

    const [signup, setState] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        address: '',
        country: '',
        gender: '',
        dob: new Date().toLocaleDateString()
    });

    const OnChanges = (event) => {
        const { name, value } = event.target;
        setState((prevVal) => {
            return {
                ...prevVal,
                [name]: value
            }
        });
    };

    const OnSubmited = (event) => {
        event.preventDefault();
        alert('Form Submitted !')
        console.log(signup)
    }

    return (
        <>
            <form className="forms" onSubmit={OnSubmited}>
                <h1>Please, SignUp Here!</h1>
                <p>{signup.fname}</p>
                <p>{signup.lname}</p>
                <p>{signup.email}</p>
                <p>{signup.phone}</p>
                <p>{signup.address}</p>
                <p>{signup.country}</p>
                <p>{signup.gender}</p>
                <p>{signup.dob}</p>
                <br />
                <input type="text" name="fname" onChange={OnChanges} placeholder="Enter your First Name" value={signup.fname} />
                <input type="text" name="lname" onChange={OnChanges} placeholder="Enter your Last Name" value={signup.lname} />
                <input type="email" name="email" onChange={OnChanges} placeholder="Enter your Email Name" value={signup.email} />
                <input type="number" name="phone" onChange={OnChanges} placeholder="Enter your Mobile No" value={signup.phone} />
                <textarea name="address" onChange={OnChanges} placeholder="Enter your Address" value={signup.address} />
                <select name="country" onChange={OnChanges} placeholder="Select Country Name" value={signup.country} >
                    {
                        Countries.map((val) => (
                            <option key={val} value={val}> {val} </option>
                        ))
                    }
                </select>
                <div style={{ marginBottom: '12px' }}>
                    <label style={{ margin: '5px', padding: '5px' }}>Male<input style={{ margin: '5px' }} type="radio" value="Male" onChange={OnChanges} name="gender" /></label>
                    <label style={{ margin: '5px', padding: '5px' }}>Female<input style={{ margin: '5px' }} type="radio" value="Female" onChange={OnChanges} name="gender" /></label>
                    <label style={{ margin: '5px', padding: '5px' }}>Other<input style={{ margin: '5px' }} type="radio" value="Other" onChange={OnChanges} name="gender" /></label>
                </div>
                <DatePicker style={{ width: '25%' }} name="dob" value={signup.dob} onChange={
                    (event) => {
                        setState((prevVal) => {
                            return {
                                ...prevVal,
                                dob: event.toLocaleDateString()
                            }
                        });
                    }
                } />

                <button type="submit"> Sign Up</button>
            </form>
        </>
    );
};

export default SignUpForm;