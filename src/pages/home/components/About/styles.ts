import { NextImage, styled } from "~/modules"

export const AboutSection = styled.section`
  width: 100%;
  min-height: calc(100vh - 4.75rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const AboutContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  border-bottom: 1px solid ${(p) => p.theme.gray600};

  img {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    max-width: 100vw;
    z-index: 0;
  }

  @media screen and (width < 768px) {
    img {
      opacity: 0.7;
    }
  }
`
export const BgImage = styled(NextImage)``

export const AboutContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`
export const Text = styled.p`
  max-width: 500px;
  padding-top: 2rem;

  font-size: 1.25rem;
  font-weight: 100;
  text-align: right;
  line-height: 140%;

  color: ${(p) => p.theme.text};
  z-index: 1;
`
export const Button = styled.button`
  padding: 0.5rem 3.5rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  gap: 1rem;

  float: right;
  margin-top: 1.5rem;
  border-radius: 8px;

  background: ${(p) => p.theme.primary};
  color: ${(p) => p.theme.background};

  &:hover {
    opacity: 0.8;
    transition: all 0.2s;
  }
`
