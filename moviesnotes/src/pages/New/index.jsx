import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

export function New() {
  return (
    <Container>
      <Header />
      <main>
          <Link to="/"><FiArrowLeft />Return</Link>
        <Form>
            <h1>New movie</h1>
          <div className="inputs">
          <Input placeholder="Title" />
          <Input placeholder="Your score (from 0 to 5)" />
          </div>
        <Textarea placeholder="Comments"/>

        <Section title="Bookmarks">
        <div className="tags">
        <NoteItem value="Drama"/>
            <NoteItem isNew placeholder="New marker"/>
        </div>
        </Section>
        <div className="buttons">
        <Button title="Delete movie" /><Button title="Save editions"/>
        </div>
        </Form>
      </main>
    </Container>
  );
}
