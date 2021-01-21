import React from 'react';
import styled from 'styled-components';


const Label = styled.label`
    display: block;
`;

function Input(props) {

    return(
        <>
            <Label htmlFor={props.id}>{props.label}</Label>
            <input type='text' id={props.id} />
        </>
    )
};

export default Input;