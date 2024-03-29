import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";

import { Link } from "react-router-dom";

export function Signup() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Application to keep track of everything you watch.</p>

        <h2>Create your account</h2>

        <Input placeholder="Name" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Password" type="password" icon={FiLock} />

        <Button title="Register" />


        <Link to="/"><FiArrowLeft/> Back to login</Link>
      </Form>

      <Background/>
    </Container>
  );
}
