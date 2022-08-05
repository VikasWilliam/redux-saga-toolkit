import React from 'react';
import './form.css'

const FormDemo= () => {
    return (
        <>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email"></input>
                </div>
                <div>
                    <label>Gender</label>
                    <input type="radio" value="male"></input>
                    <label>Male</label>
                    <input type="radio" value="female"></input>
                    <label>female</label>
                </div>
                <div>
                    <p>Address:</p>
                    <input type="text"></input>
                </div>
                <div>
                    <p>address:</p>
                    <input type="password"></input>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </>
        )
}

export default FormDemo