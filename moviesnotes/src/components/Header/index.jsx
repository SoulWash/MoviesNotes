import { Container, Profile, Brand } from "./styles";
import { Input } from "../../components/Input";

import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>
      <Input placeholder="Search by title"/>
      <Profile>
        <div>
          <Link to="/profile">
          <strong>Washington Luiz</strong>
          </Link>
          <Link to="/">leave</Link>
        </div>
        <Link to="/profile">
        <img src="https://github.com/SoulWash.png" alt="user photo" />
        </Link>
      </Profile>
    </Container>
  );
}
