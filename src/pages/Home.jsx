import styled from "@emotion/styled"
import { Link } from "react-router-dom"

const Box = styled.div`
    display: flex;
    width: 70vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    margin: 0 auto;
    gap: 20px;
    text-align: center;

    & p:first-of-type {
        font-size: 38px;
        font-weight: 600;
    }

    & p {
        font-size: 32px;
        font-weight: 400;
    }

    & span {
        color: #2dcf2d;
    }
`
const StyledLink = styled(Link)`
    color: #2dcf2d;
    transition: text-shadow 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

    &:hover,
    &:focus {
        text-shadow: #1e9509  .5px .5px .5px;
    }
`

export default function Home() {
    return <Box>
        <p>Welcome to the <span>Phonebook</span> web-site!</p>
        <p>Here you can create your own phonebook very simple - just <StyledLink to='/register'>sign-up</StyledLink> or <StyledLink to="/login">login</StyledLink> to manage your contacts. Enjoy :)</p>
    </Box>
}
