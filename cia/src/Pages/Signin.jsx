import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <div className="auth-page">
            <h1>Sign Up</h1>

            <form className="auth-form">
                <label htmlFor="signup-username">Username</label>
                <input id="signup-username" type="text" placeholder="Username" />

                <label htmlFor="signup-email">Email</label>
                <input id="signup-email" type="email" placeholder="Email" />

                <label htmlFor="signup-address">Address</label>
                <input id="signup-address" type="text" placeholder="Address" />

                <label htmlFor="signup-city">City</label>
                <input id="signup-city" type="text" placeholder="City" />

                <label htmlFor="signup-state">State</label>
                <input id="signup-state" type="text" placeholder="State" />

                <label htmlFor="signup-pincode">Pincode</label>
                <input id="signup-pincode" type="number" placeholder="Pincode" />

                <label htmlFor="signup-password">Password</label>
                <input id="signup-password" type="password" placeholder="Password" />

                <button type="submit">Sign Up</button>
            </form>

            <p className="auth-switch">
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    )
}

export default Signin
