/* eslint-disable react/no-unescaped-entities */
import { Container, Content, Title, Item } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { Section } from "../../components/Section";

import { FiArrowLeft } from "react-icons/fi";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { Link } from "react-router-dom";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
      <Link to="/">
            <FiArrowLeft />
            <ButtonText title="Back" />
          </Link>
        <Content>


          <Title>
            <h1>Interestellar</h1>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStarOutline />
          </Title>

          <Item>
            <img src="https://github.com/SoulWash.png" alt="user photo" />
            <span>By Washington Luiz</span>

            <CiClock2 />
            <span>23/05/22 at 08:00</span>
          </Item>

          <Section>
            <Tag title="Science fiction" />
            <Tag title="Drama" />
            <Tag title="Family" />
          </Section>
          
          <p>
            Crop pests caused human civilization to regress to an agrarian
            society in a future of unknown date. Cooper, a former NASA pilot,
            has a farm with his family. Murphy, Cooper's ten-year-old daughter,
            believes her room is haunted by a ghost trying to communicate with
            her. Father and daughter discover that the "ghost" is an unknown
            intelligence that is sending coded messages through gravitational
            radiation, leaving binary coordinates that lead them to a secret
            NASA facility led by Professor John Brand. The scientist reveals
            that a wormhole has been opened near Saturn and that it leads to
            planets that can offer survival conditions for the human species.
            The "Lazarus missions" sent years earlier identified three
            potentially habitable planets orbiting the Gargantua black hole:
            Miller, Edmunds and Mann – named after the astronauts who researched
            them. Brand recruits Cooper to pilot the Endurance spacecraft and
            retrieve the astronauts' data; If one of the planets proves
            habitable, humanity will head to it at the NASA facility, which is
            in reality a huge space station. Cooper's departure devastates
            Murphy.
          </p>
          <br/>
          <p>
            Além de Cooper, a tripulação da Endurance é formada pela bióloga
            Amelia, filha de Brand; o cientista Romilly, o físico planetário
            Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca
            e se dirigem a Miller, porém descobrem que o planeta possui enorme
            dilatação gravitacional temporal por estar tão perto de Gargântua:
            cada hora na superfície equivale a sete anos na Terra. Eles entram
            em Miller e descobrem que é inóspito já que é coberto por um oceano
            raso e agitado por ondas enormes. Uma onda atinge a tripulação
            enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e
            atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia
            descobrem que 23 anos se passaram.
          </p>
        </Content>
      </main>
    </Container>
  );
}
