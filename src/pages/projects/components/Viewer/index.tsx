import {
  Buttons,
  FullImage,
  Link,
  Subtitle,
  Tags,
  Text,
  ViewerContainer,
  ViewerContent,
} from "./styles"
import { Tag } from ".."

const Viewer = ({
  image,
  title,
  tags,
  fullDescription,
  deploy,
  repository,
}: ViewerProps) => {
  return (
    <ViewerContainer>
      <ViewerContent>
        <FullImage src={image} width={600} alt={`Imagem do projeto ${title}`} />
        <Subtitle>{title}</Subtitle>
        <Tags>
          {tags.map((tag, i) => {
            return <Tag key={i} content={tag} />
          })}
        </Tags>
        <Text>{fullDescription}</Text>
        <Buttons>
          <Link href={deploy} target="_blank" rel="noreferrer">
            Ver mais
          </Link>
          <Link href={repository} target="_blank" rel="noreferrer">
            Projeto
          </Link>
        </Buttons>
      </ViewerContent>
    </ViewerContainer>
  )
}

export default Viewer
