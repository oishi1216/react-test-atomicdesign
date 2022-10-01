import { Link, Outlet } from "react-router-dom";
import styled from "styled-components"

export const Header = () => {
    return(
        <SHeader>
            <SLink to="/">HOME</SLink>
            <SLink to="/users">USERS</SLink>
            <Outlet />
        </SHeader>
    )
}

const SHeader = styled.header`
    background-color: #11999e;
    color: #fff;
    text-align: center;
    padding: 8px 0;
`;

const SLink = styled(Link)`
    margin: 0 8px;
`;