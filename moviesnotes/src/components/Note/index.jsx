import { Container, Stars } from "./styles";
import { Tag } from "../../components/Tag";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Stars>
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStarOutline />
      </Stars>
      <p>
        {data.discription}
      </p>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}

    </Container>
  );
}
