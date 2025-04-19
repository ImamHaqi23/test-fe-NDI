import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div className="flex h-screen flex-col lg:flex-row ">
      <div className="hidden lg:block lg:w-1/2 bg-cover bg-center m-1 overflow-hidden">
        <img
          src="https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&h=1000"
          alt="login"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex items-center justify-center w-full my-auto lg:w-1/2 p-6 bg-white">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
