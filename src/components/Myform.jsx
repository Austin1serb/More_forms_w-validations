import React, { useState } from 'react'

const Myform = () => {



    // STATE
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })


    






    const submitForm = e => {
        // prevent default submit behaviour
        e.preventDefault();

        console.log(formData)

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        })
    }

    const [firstErr, setFirstErr] = useState("")
    const [lastErr, setLastErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
const [confirmPasswordErr, setConfirmPasswordErr] = useState("")


    const handleChange = e => {
        const { name, value } = e.target
        setFormData((currentData) => ({ ...currentData, [name]: value }))

        if (name === "firstName" && value.length < 2) {
            setFirstErr("First name must be at least 2 characters")
        }else{
            setFirstErr("")
        }


        if (name === "lastName" && value.length < 2) {
            setLastErr("Last name must be at least 2 characters")
        }else{
            setLastErr('')
        }

        if (name === "email" && value.length < 5) {
            setEmailErr("Last name must be at least 5 characters")
        }else{
            setEmailErr('')
        }
        if (name === "password" && value.length < 8 ) {
            setPasswordErr("Last name must be at least 8 characters")
        }else{
            setPasswordErr('')
        }
        // create logic to check if password and confirm password are the same
        if (name === "confirmPassword" && value!== formData.password) {
            setConfirmPasswordErr("Passwords do not match")
        }else{
            setConfirmPasswordErr('')
        }

        // if (name === "password" || value.password !== value.confirmPassword ) {
        //     setPasswordErr("Passwords much match")
        // }else{
        //     setPasswordErr('')
        // }

    }





    const formStyle = {
        width: 400
    }

    const errStyle = {
        padding: 0,
        margin: 0,
        color: "red",
        fontWeight: "bold"

    }

    return (


        <form style={formStyle} onSubmit={submitForm} >



            <fieldset>
                {/* <legend>Sign Up!</legend> */}
                <p style={errStyle}  >{firstErr}</p>
                <label>First Name:</label>
                {/* /* connecting change and state */}
                <input name='firstName' onChange={handleChange} value={formData.firstName} type="text" />
                <br />
                <p style={errStyle} >{lastErr}</p>
                <label>Last Name:</label>
                <input name='lastName' onChange={handleChange} value={formData.lastName} type="text" />
                <br />
                <p style={errStyle} >{emailErr}</p>
                <label >Email:</label>
                <input name='email' onChange={handleChange} value={formData.email} type="text" />
                <br />
                <p style={errStyle} >{passwordErr}</p>
                <label >Password:</label>
                <input name='password' onChange={handleChange} value={formData.password} type="password" />
                <br />
                <p style={errStyle} >{confirmPasswordErr}</p>
                <label >Confirm Password:</label>
                <input name='confirmPassword' onChange={handleChange} value={formData.confirmPassword} type="password" />
                <button>Register</button>
            </fieldset>

            <br />

            {/* <fieldset>
                <p>Your Form Data</p>
                <label>First Name:</label>
                <p name='firstName' onChange={handleChange} type="text" >{formData.firstName}</p>
                <br />
                <label>Last Name:</label>
                <p name='lastName' onChange={handleChange} type="text" >{formData.lastName}</p>
                <br />
                <label >Email:</label>
                <p name='email' onChange={handleChange} type="text">{formData.email}</p>
                <br />
                <label >Password:</label>
                <p name='password' onChange={handleChange} type="text" >{formData.password}</p>
                <br />
                <label >Confirm Password:</label>
                <p name='confirmPassword' onChange={handleChange} type="text">{formData.confirmPassword}</p>
            </fieldset> */}
        </form>
        
        
    )
}

export default Myform
