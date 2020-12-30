import React, { useState } from "react";

const LoginFrom = () => {

    // share input values....
    const [login, setLoginDetails] = useState({
        email: '',
        password: ''
    });

    // display submitted data
    const [loginDetails, loginSubmitted] = useState(login);

    const OnEltChange = (event) => {
        // const name = event.target.name;
        // const value = event.target.value;
        const { name, value } = event.target;  //object Destructuring

        setLoginDetails((prevVal) => {
            return {
                ...prevVal,
                [name]: value
            }
            // if (name === 'email') {
            //     return {
            //         email: value,
            //         password: prevVal.password
            //     };
            // }
            // else if (name === 'password') {
            //     return {
            //         password: value,
            //         email: prevVal.email,
            //     };
            // }
        })
    };

    const OnSubmits = (event) => {
        event.preventDefault();
        alert('From Submitted')
        loginSubmitted({ ...login });  // spread operator
    };

    return (
        <>
            <form onSubmit={OnSubmits} className="forms">
                <h1>Hello, Please Login</h1>
                <p style={{ color: 'black', fontWeight: 'bold', backgroundColor:"transparent" }}>{loginDetails.email}</p>
                <p style={{ color: 'black', fontWeight: 'bold', backgroundColor:"transparent" }}>{loginDetails.password}</p>
                <input type="email" name="email" placeholder="Please Enter Email" value={login.email}
                    onChange={OnEltChange} />
                <input type="password" name="password" placeholder="Please Enter Pssword" value={login.password}
                    onChange={OnEltChange} />
                <button type="submit">Submit Me</button>
            </form>
        </>
    );
}


export default LoginFrom;