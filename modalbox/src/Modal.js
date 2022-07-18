import React from 'react';

const Modal=({open,children,onclose})=>{
    if(!open) return null
    return(
        <div>
            <button onClick={onclose}>Close Modal box</button>
           <h2>{children}</h2>
        </div>
    )
}

export default Modal;