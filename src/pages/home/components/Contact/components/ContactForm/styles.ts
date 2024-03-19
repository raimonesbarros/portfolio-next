import { styled } from "~/modules";

export const Form = styled.form`
  width: 100%;
  max-width: 530px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-bottom: 0;
  margin-top: 2rem;
  gap: 0.5rem;
  border-radius: 8px;

  color: ${(p) => p.theme.textLight};
  background-color: ${(p) => p.theme.background};
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  padding-bottom: 0.5rem;

  @media screen and (width <= 366px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  &[for="name"] {
    width: 30%;
  }
  &[for="email"] {
    width: 70%;
  }

  @media screen and (width <= 366px) {
    &[for="name"] {
      width: 100%;
      max-width: 120px;
    }

    &[for="email"] {
      width: 100%;
    }
  }
`;

export const Input = styled.input`
  outline: unset;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  color: ${(p) => p.theme.gray300};
  border: 2px solid ${(p) => p.theme.border};
  &:focus {
    box-shadow: 0 0 2px 2px ${(p) => p.theme.primary};
  }
`;

export const TextArea = styled.textarea`
  outline: unset;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  color: ${(p) => p.theme.gray300};
  resize: vertical;
  min-height: 100px;
  border: 2px solid ${(p) => p.theme.border};

  &:focus {
    box-shadow: 0 0 2px 2px ${(p) => p.theme.primary};
  }
`;

export const Button = styled.button`
  width: 30%;
  margin: 1rem 0;
  margin-left: auto;
  border-radius: 8px;
  padding: 0.4rem 0.5rem;

  font-weight: bold;

  color: ${(p) => p.theme.gray100};
  background-color: ${(p) => p.theme.primary};

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;

export const FormError = styled.p`
  font-size: 12px;
  color: #f75a69;
`;
