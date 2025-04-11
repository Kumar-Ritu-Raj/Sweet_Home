import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Login.scss';

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string>('');
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    setLoginError('');
    
    if (data.email === 'admin@example.com' && data.password === 'password123') {
      navigate('/apartment-form');
    } else {
      setLoginError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className={errors.email ? 'error' : ''}
              {...register('email', { required: true })}
            />
            {errors.email && <span className="error-message">Email is required</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className={errors.password ? 'error' : ''}
              {...register('password', { required: true })}
            />
            {errors.password && <span className="error-message">Password is required</span>}
          </div>

          {loginError && <div className="login-error">{loginError}</div>}

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; 