import React from 'react';
import classes from './Input.module.css';
import { Form } from 'react-bootstrap';

const Input = React.forwardRef((props,ref) => {
    return (
        <div className={classes.input}>
            <Form.Control ref={ref} {...props.input} />
            {/* <input ref={ref} {...props.input} /> */}
        </div>
    );
})

export default Input;