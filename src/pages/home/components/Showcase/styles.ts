import { NextImage, styled } from "~/modules";
import { CaretDown } from "~/utils";

type Props = {
  $light?: boolean;
  $top: boolean;
};

export const ShowcaseSection = styled.section`
  width: 100%;
  position: relative;
  min-height: calc(100vh - 4.75rem);
  margin-top: 4.75rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.backgroundLight};
`;

export const ShowcaseContainer = styled.div<Props>`
  position: relative;
  width: 100%;
  max-width: 1120px;
  height: calc(100vh - 4.75rem);

  padding: 0 1rem;

  border-bottom: 1px solid ${(p) => p.theme.border};

  display: flex;
  align-items: center;

  > img {
    position: absolute;
    right: 0;
    bottom: 0;
    filter: ${(p) => p.$light && `invert() opacity(.7) grayscale(2)`};
  }

  svg {
    @keyframes arrow {
      from {
        bottom: 5%;
      }
      to {
        bottom: 12%;
      }
    }

    width: 2em;
    position: absolute;
    bottom: 6%;
    left: 50%;
    transform: translateX(-50%);
    animation: arrow 0.6s 4.5s alternate infinite;
    color: ${(p) => p.theme.primary};
    opacity: ${(p) => (p.$top ? "1" : "0")};
  }
`;

export const BgImage = styled(NextImage).attrs({ width: 619, height: 768 })`
  aspect-ratio: 619 / 728;
`;

export const Text = styled.p`
  height: 2.2rem;
  font-size: 1.5rem;
  font-weight: 100;
  font-family: "Roboto";
  color: ${(p) => p.theme.text};
  white-space: nowrap;
  overflow: hidden;
`;

export const ShowcaseDescription = styled.div`
  @keyframes appear {
    0% {
      opacity: 0;
    }
    99% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes writing {
    0% {
      width: 0;
      border-right: 2px solid ${(p) => p.theme.border};
    }
    100% {
      border-right: 2px solid ${(p) => p.theme.border};
    }
  }

  @keyframes cursors {
    from {
      border-right-color: ${(p) => p.theme.text};
    }
    to {
      border-right-color: transparent;
    }
  }

  padding-left: 20%;
  transform: translateY(-2.35rem);

  p:nth-child(even) {
    margin-bottom: 0.5rem;
  }
  p:nth-child(2) {
    width: 9.5rem;
    animation:
      appear 1.1s normal,
      cursors 0.5s infinite normal,
      writing 1s 1s steps(9) normal;
  }
  p:nth-child(4) {
    width: 14rem;
    animation:
      appear 2.2s normal,
      cursors 0.5s infinite normal,
      writing 1s 2.1s steps(12) normal;
  }
  p:nth-child(6) {
    width: 9.6rem;
    border-right: 2px solid ${(p) => p.theme.border};
    animation:
      appear 3.3s normal,
      cursors 0.7s infinite normal,
      writing 1s 3.2s steps(9) normal;
  }

  @media screen and (width <= 650px) {
    padding-left: 10%;
  }
`;

export const ToDown = styled(CaretDown).attrs({ size: 40 })``;

export const Strong = styled.strong`
  color: ${(p) => p.theme.textLight};
  font-size: 2rem;
`;
