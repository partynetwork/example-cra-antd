import React from 'react';
import { Button } from 'antd';

export const LoginPage = () => {
  return (
    <>
      <p>Login Page</p>
      <Button type="primary" htmlType="button">
        Primary
      </Button>
      <Button type="primary" danger>
        Danger
      </Button>
      <Button>Hello</Button>
    </>
  );
};
export default LoginPage;
