import styled from "styled-components";
export const Button = styled.button`
    font-family: "Montserrat", sans-serif;

    background: #1476f2;
    text-transform: uppercase;
    font-size: 13px;
    height: 45px;
    min-width: 140px;
    padding: 5px 20px;
    font-weight: 600;
    text-transform: uppercase;
    transition: all 0.3s;
    justify-content: center;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
        background: #005ed7;
    }
`;
