/*import React from 'react';
import Header from './Header'; // Ensure the path is correct

function Login() {
  return (
    <div>
      <Header /> 
      <div style={{ padding: '20px' }}>
        <h1>Login Page</h1>
        <p>Welcome to the login page! Please sign in or create an account.</p>
        <form>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
*/

/*import React, { useState } from 'react';
import Header from './Header'; // Adjusted the path according to folder structure

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <Header />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>{isLogin ? 'Login Page' : 'Register Page'}</h1>
        {isLogin ? (
          <form style={{ marginTop: '20px' }}>
            <input type="text" placeholder="Username" style={{ padding: '10px', margin: '10px 0', width: '100%', maxWidth: '300px', border: '1px solid #ccc', borderRadius: '5px' }} />
            <br />
            <input type="password" placeholder="Password" style={{ padding: '10px', margin: '10px 0', width: '100%', maxWidth: '300px', border: '1px solid #ccc', borderRadius: '5px' }} />
            <br />
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
          </form>
        ) : (
          <form style={{ marginTop: '20px' }}>
            <input type="text" placeholder="Username" style={{ padding: '10px', margin: '10px 0', width: '100%', maxWidth: '300px', border: '1px solid #ccc', borderRadius: '5px' }} />
            <br />
            <input type="email" placeholder="Email" style={{ padding: '10px', margin: '10px 0', width: '100%', maxWidth: '300px', border: '1px solid #ccc', borderRadius: '5px' }} />
            <br />
            <input type="password" placeholder="Password" style={{ padding: '10px', margin: '10px 0', width: '100%', maxWidth: '300px', border: '1px solid #ccc', borderRadius: '5px' }} />
            <br />
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Register</button>
          </form>
        )}
        <p style={{ marginTop: '20px' }}>
          {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
          <button onClick={toggleForm} style={{ marginLeft: '10px', background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}>
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
*/


import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="login-register-container">
      <div className="illustration">
        <img src="https://accounts.practo.com/static/images/illustration.png" alt="Illustration" className="illustration-image" />
      </div>

      <div className="form-container">
        <div className="tabs">
          <button className={`tab ${isLogin ? '' : 'active'}`} onClick={() => setIsLogin(false)}>
            Register
          </button>
          <button className={`tab ${isLogin ? 'active' : ''}`} onClick={() => setIsLogin(true)}>
            Login
          </button>
        </div>

        <h2>{isLogin ? 'Login to Practo' : 'Join Practo'}</h2>

        <form className="form">
          {!isLogin && (
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Full Name" />
            </div>
          )}
          <div className="form-group">
            <label>Mobile Number</label>
            <div className="mobile-input">
              <select>
                <option value="+91">+91 (IND)</option>
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
              </select>
              <input type="text" placeholder="Mobile Number" />
            </div>
          </div>
          <div className="form-group">
            <label>{isLogin ? 'Password' : 'Create Password'}</label>
            <input type="password" placeholder="Password" />
          </div>
          {!isLogin && (
            <div className="form-group">
              <input type="checkbox" />
              <label>Receive relevant offers and promotional communication from Practo</label>
            </div>
          )}
          <button type="submit" className="submit-button">
            {isLogin ? 'Login' : 'Send OTP'}
          </button>
        </form>

        {!isLogin && (
          <p className="doctor-link">
            Are you a doctor? <a href="#">Register Here</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;

