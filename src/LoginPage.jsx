import React from 'react';

export default function LoginPage() {
  return (
    <div>
      <h2>Log In</h2>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input type="text" id="login-email" />
      </div>
      <div>
        <label htmlFor="login-password">
          password
        </label>
        <input type="text" id="login-password" />
      </div>
    </div>
  );
}
