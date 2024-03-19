import { styled } from "~/modules";

interface TagContentProps {
  $variant: string;
}

export const TagContent = styled.span<TagContentProps>`
  padding: 0.1rem 0.5rem;
  border-radius: 50rem;
  margin: 0 0.2rem;
  font-size: 0.75rem;
  font-weight: 700;

  background-color: ${(props) => props.$variant === "HTML" && "#E24D25"};
  color: ${(props) => props.$variant === "HTML" && "#000000"};
  background-color: ${(props) => props.$variant === "CSS" && "#1E60AE"};
  color: ${(props) => props.$variant === "CSS" && "#000000"};
  background-color: ${(props) => props.$variant === "JavaScript" && "#E8C931"};
  color: ${(props) => props.$variant === "JavaScript" && "#000000"};
  background-color: ${(props) => props.$variant === "ReactJS" && "#49D4FD"};
  color: ${(props) => props.$variant === "ReactJS" && "#000000"};
  background-color: ${(props) => props.$variant === "TypeScript" && "#0064B6"};
  color: ${(props) => props.$variant === "TypeScript" && "#ffffff"};
  background-color: ${(props) => props.$variant === "+ libs" && "#000000"};
  border: 1px solid
    ${(props) =>
      props.$variant === "+libs" ? props.theme.text : "transparent"};
`;
