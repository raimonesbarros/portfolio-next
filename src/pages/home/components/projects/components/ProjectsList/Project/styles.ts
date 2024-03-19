import { NextImage, styled } from "~/modules";

export const ProjectContainer = styled.div`
  width: 100%;
  padding: 0.5rem;

  display: flex;
  align-items: center;

  background: ${(p) => p.theme.background};
  border-radius: 8px;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${(p) => p.theme.border};
  }

  cursor: pointer;
`;

export const Image = styled(NextImage).attrs({ width: 160, height: 90 })`
  /* width: 10rem; */
  height: 100%;
  border-radius: 4px;
`;

export const Subtitle = styled.h3`
  text-align: center;
`;

export const Text = styled.p`
  text-align: center;
`;

export const ProjectInfo = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
`;
