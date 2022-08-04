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
            </form>
        </>
        )
}

export default FormDemo