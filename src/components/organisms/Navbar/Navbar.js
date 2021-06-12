import React from "react";
//Components
import SolidButton from "../../atoms/Buttons/SolidButton/SolidButton.js";

//Material-UI-Components

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

//styled-components
// import {
//     Nav,
//     Container,
//     LeftSide,
//     RightSide,
//     Options,
//     Logo,
// } from "./Navbar.element";
//assests
import BusinessLogo from "./YourLogo.png";

const useStyles = makeStyles((theme) => ({}));

const Navbar = () => {
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item></Grid>
            </Grid>
        </React.Fragment>
    );
};
export default Navbar;

{
    /* <Nav id="Navbar101">
<Container>
    <LeftSide>
        <a
            href="https://github.com/abubakarshf"
            rel="noopener noreferrer"
            target="_blank" //github.com/abubakarshf"
        >
            <Logo src={BusinessLogo}></Logo>
        </a>
    </LeftSide>
    <RightSide>
        <Options>
            <ul>
                <li>
                    <a href="https://github.com/abubakarshf">
                        services
                    </a>
                </li>
                <li>
                    <a href="https://github.com/abubakarshf">
                        Technologies
                    </a>
                </li>
                <li>
                    <a href="https://github.com/abubakarshf">
                        Industries
                    </a>
                </li>
                <li>
                    <a href="https://github.com/abubakarshf">
                        Clients
                    </a>
                </li>
                <li>
                    <a href="https://github.com/abubakarshf">
                        Company
                    </a>
                </li>
            </ul>
            <SolidButton dis={"get in touch"} />
        </Options>
    </RightSide>
</Container>
</Nav> */
}
