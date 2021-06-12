import React from "react";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";

function OutlineButton(props) {
    return (
        <React.Fragment>
            <aTag href="#">
                <OutButton>
                    {props.disc}
                    <BiChevronRight id="icon" />
                </OutButton>
            </aTag>
        </React.Fragment>
    );
}

export default OutlineButton;
const OutButton = styled.button`
    width: 210px;
    padding: 10px;
    margin-top: 60px;
    height: 45px;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    white-space: nowrap;
    color: #fff;
    background: transparent;
    border: 2px solid #fff;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: #1476f2;
        transition: all 0.4s;
    }
    #icon {
        font-size: 25px;
        font-weight: 100;
        margin-top: -3px;
        position: absolute;
    }
`;
