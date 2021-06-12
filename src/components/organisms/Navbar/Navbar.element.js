import styled from "styled-components";
export const Nav = styled.div`
    width: 100vw;
    /* background-color: rgba(0, 0, 0, 0); */
    background-color: coral;
    position: sticky;
    z-index: 15;
`;
export const Container = styled.div`
    margin: 0px 12rem;
    display: flex;
`;

export const Logo = styled.img`
    width: 170px;
    height: 75px;
`;
export const LeftSide = styled.div`
    flex: 25%;
`;
export const RightSide = styled.div`
    padding-left: 20px;
    display: flex;
    flex: 45%;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
`;
export const Options = styled.div`
    font-family: "Montserrat", sans-serif;
    width: 100%;
    ul {
        display: inline-block;
        li {
            display: inline-block;
            > a {
                padding: 0px 40px 0px 0px;
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                &:hover {
                }
            }
        }
    }
`;
