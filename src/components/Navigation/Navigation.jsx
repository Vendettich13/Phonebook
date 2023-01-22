import { useAuth } from "hooks/useAuth";
import { NavLink } from "react-router-dom";

export function Navigation() {
    const { isLoggedIn } = useAuth()
    
    return <nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
}