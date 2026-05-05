import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import AccountForm from "../../ui/AccountForm";
import { HiLogin } from "react-icons/hi";
import styled from "styled-components";
import toast from "react-hot-toast";
import useLogin from "./hooks/useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

const StyledLoginHeader = styled.h1`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2.8rem;
  justify-content: center;
`;
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginFnDetails = useLogin();

  console.log("log", loginFnDetails);
  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password)
      return toast.error("Please enter your credentials");
    if (password.length < 6)
      return toast.error("Password too short, must be at least 6");
    loginFnDetails.mutate({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <StyledLoginHeader>
        <HiLogin /> <span>Login to AgiStar</span>
      </StyledLoginHeader>
      <AccountForm label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loginFnDetails.isPending}
        />
      </AccountForm>
      <AccountForm label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loginFnDetails.isPending}
        />
      </AccountForm>
      <AccountForm>
        <Button size="large" variation="primary">
          {!loginFnDetails.isPending ? "Login" : <SpinnerMini />}
        </Button>
      </AccountForm>
    </Form>
  );
}

export default LoginForm;
