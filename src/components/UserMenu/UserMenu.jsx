import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import styled from "@emotion/styled";
import { logOut } from "redux/auth/operations";

const NavWrapperAuthed = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`

export function UserMenu() {
    const { user } = useAuth();
    const dispatch = useDispatch();

    return <NavWrapperAuthed>
        <p style={{fontSize: '20px'}}>Welcome, <span style={{color: "#2dcf2d"}}>{user.name}</span></p>
        <Button onClick={() => dispatch(logOut())} style={{color: "#2dcf2d", borderColor: '#2dcf2d'}} variant="outlined" type="button">Logout</Button>
    </NavWrapperAuthed>
}