import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiMail, FiLock } from "react-icons/fi";

import { Link } from "react-router-dom";

export function Signin() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Application to keep track of everything you watch.</p>

        <h2>User Login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail}/>
        <Input placeholder="Password" type="password" icon={FiLock} />

        <Button title="Login" />

        <Link to="/register">Create an account</Link>
      </Form>

      <Background/>
    </Container>
  );
}
