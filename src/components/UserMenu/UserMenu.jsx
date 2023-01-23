import { useAuth } from "hooks/useAuth";
import Button from '@mui/material/Button';
import styled from "@emotion/styled";

const NavWrapperAuthed = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`

export function UserMenu() {
    const { user } = useAuth();

    return <NavWrapperAuthed>
        <p>Welcome, <span style={{color: "#2dcf2d"}}>{user.name}</span></p>
        <Button style={{color: "#2dcf2d", borderColor: '#2dcf2d'}} variant="outlined" type="button">Logout</Button>
    </NavWrapperAuthed>
}