import React, { useState } from 'react'

const Login = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };
  
  return (
    <div>Login</div>
  )
}

export default Login