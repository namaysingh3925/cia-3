import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className="auth-page">
            <h1>Login</h1>

            <form className="auth-form">
                <label htmlFor="login-username">Username</label>
                <input id="login-username" type="text" placeholder="Username" />

                <label htmlFor="login-password">Password</label>
                <input id="login-password" type="password" placeholder="Password" />

                <button type="submit">Login</button>
            </form>

            <p className="auth-switch">
                Don't have an account? <Link to="/signin">Sign up</Link>
            </p>
        </div>
    )
}

export default Login
