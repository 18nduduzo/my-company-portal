import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';

function App() {
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.png" alt="Company Logo" style={{ height: '80px', margin: '20px 0' }} />
        <h1>Company Portal</h1>

        {isAuthenticated ? (
          <>
            <p>Welcome, {user?.name || user?.email}!</p>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>
            <div style={{ marginTop: '40px' }}>
              <h2>Your Payslips</h2>
              <button>Download January Payslip (placeholder)</button>
              <p>Secure downloads coming soon.</p>
            </div>
          </>
        ) : (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        )}
      </header>
    </div>
  );
}

export default App;
