import { Container, Content } from "./styles";
import { Header } from "../../components/Header";

import { Note } from "../../components/Note";
import { Section } from "../../components/Section";

import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";


export function Home() {
  return (
    <Container>
      <Header />
      <div className="header">
        <h1>My movies</h1>
        <Link to="/new">
        <FiPlus />
          Add movies
        </Link>
      </div>

      <Content>
          <Section>
            <Note data={{
              title: 'Interestellar',
              discription:`Crop pests caused human civilization to regress to an agrarian society
        in a future of unknown date. Cooper, a former NASA pilot, has a farm
        with his family. Murphy, Cooper's ten-year-old daughter, believes her
        room is haunted by a ghost trying to communicate with her. Father and
        daughter discover that the "ghost" is an unknown intelligence that is
        sending coded messages through gravitational radiation, leaving binary
        coordinates that lead them to a secret NASA facility led by Professor
        John Brand. The scientist reveals that a wormhole has been opened near
        Saturn and that it leads to planets that can offer survival conditions
        for the human species. The "Lazarus missions" sent years earlier
        identified three potentially habitable planets orbiting the Gargantua
        black hole: Miller, Edmunds and Mann – named after the astronauts who
        researched them. Brand recruits Cooper to pilot the Endurance spacecraft
        and retrieve the astronauts' data; If one of the planets proves
        habitable, humanity will head to it at the NASA facility, which is in
        reality a huge space station. Cooper's departure devastates Murphy.`,
             tags:[
              {id:'1', name:'Science fiction'},
              {id:'2', name:'Drama'},
              {id:'3', name:'Family'},
              ]
             }}/>
          </Section>
      </Content>
    </Container>
  );
}
