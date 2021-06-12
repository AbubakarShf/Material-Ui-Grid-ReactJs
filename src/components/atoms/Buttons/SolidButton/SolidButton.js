import React from "react";
import { Button } from "./SolidButton.element";
const cmpSolidButton = (props) => {
    return (
        <React.Fragment>
            <Button>{props.dis}</Button>
        </React.Fragment>
    );
};
export default cmpSolidButton;
