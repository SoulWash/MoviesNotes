import { Container, Form, Avatar} from "./styles";
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";

import { Link } from "react-router-dom";

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/"><FiArrowLeft/>Return</Link>
            </header>

            <Form>
            <Avatar>
                <img src="https://github.com/SoulWash.png" alt="User photo"/>

                <label htmlFor="avatar">
                    <FiCamera/>
                    <input id="avatar" type="file" />
                </label>
            </Avatar>
                <Input type="text" icon={FiUser} placeholder="User name"/>
                <Input type="text" icon={FiMail} placeholder="E-mail" />
                <Input type="password" icon={FiLock} placeholder="Current Password"/>
                <Input type="password" icon={FiLock} placeholder="New password"/>

                <Button title="Save"/>
            </Form>
        </Container>
    )
}