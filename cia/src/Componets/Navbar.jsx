import { NavLink } from "react-router-dom";

const Navbar = () => {
    // Styles navigation items beautifully using the built-in React Router v6 isActive state
    const linkStyle = ({ isActive }) => ({
        color: isActive ? 'var(--accent)' : 'var(--text-h)',
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: '500',
        padding: '8px 16px',
        borderRadius: '6px',
        background: isActive ? 'var(--accent-bg)' : 'transparent',
        transition: 'all 0.25s ease'
    });

    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px',
            padding: '16px 20px',
            borderBottom: '1px solid var(--border)',
            background: 'var(--bg)'
        }}>
            <NavLink to="/" style={linkStyle}>Home</NavLink>
            <NavLink to="/login" style={linkStyle}>Login</NavLink>
            <NavLink to="/signin" style={linkStyle}>Sign In</NavLink>
        </nav>
    );
};

export default Navbar;
