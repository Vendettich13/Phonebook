import { Navigation } from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu"
import { AuthNav } from "components/AuthNav/AuthNav"
import { useAuth } from "hooks/useAuth"
import styled from "@emotion/styled"

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-bottom: 20px;

    border-bottom: 3px solid black;
`

export function AppBar() {
    const { isLoggedIn } = useAuth();
    return <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </Header>
}