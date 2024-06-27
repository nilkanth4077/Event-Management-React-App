import React, { useEffect, useState } from "react";

export const HomePage = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Retrieve firstName from localStorage
    const storedFirstName = localStorage.getItem('email');
    if (storedFirstName) {
      setEmail(storedFirstName);
    }
  }, []);

  return (
    <>
      <div>This is the protected home page</div>
      <h4>Hello, {email}</h4>
    </>
  );
};
