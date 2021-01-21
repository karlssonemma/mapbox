import React from 'react'
import styled from 'styled-components';

const Submit = styled.button`
    display: block;
`;


function Button(props) {

    return(
        <Submit type='submit' onClick={() => props.function}>{props.text}</Submit>
    )
}

export default Button;