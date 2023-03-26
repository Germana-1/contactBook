import styled from "styled-components";
export const HomeStyled = styled.div`
  figure {
    display: none;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
    background-color: var(--color-grey-5);
    width: max-content;
    figure {
      display: flex;
    }
  }
`;

export const ContainerStyled = styled.div`
  background-color: var(--color-grey-5);
  color: var(--color-grey-0);
  width: 369px;
  height: fit-content;
  padding: 45px 22.5px;
  margin: 0 auto;

  h1 {
    font-weight: 700;
    font-size: 18px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      align-self: start;
      font-weight: 400;
      font-size: 12.182px;
      margin: 22px 0;
    }

    input {
      background-color: var(--color-grey-4);
      color: var(--color-grey-0);

      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;

      width: 329.93px;
      height: 48px;

      padding: 0 16px;

      font-weight: 400;
      font-size: 16.2426px;
      text-align: start;
    }
  }

  span {
    font-weight: 400;
    font-size: 12px;
    color: var(--color-primary);
  }

  p {
    font-weight: 400;
    font-size: 12px;
    margin-top: 22px;
    color: var(--color-grey-3);
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    max-width: 369px;
    width: 90%;

    form {
      input {
        width: 100%;
      }
      select {
        width: 100%;
      }
    }
  }
`;

export const ContainerDashboardStyled = styled.div`
  color: var(--color-grey-0);

  .containerBtnAdd {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 20%;
    h2 {
      font-weight: 600;
      font-size: 16px;
    }
    button {
      background-color: var(--color-grey-2);
      width: 32.49px;
      height: 32px;
      border-radius: 4px;
      color: var(--color-grey-5);
      padding: 5px;
      font-size: 20px;
      :hover {
        background-color: var(--color-primary-focus);
      }
    }
  }

  @media (max-width: 768px) {
    .containerBtnAdd {
      padding: 20px 5%;
    }
  }
`;

export const ContainerUserStyled = styled.div`
  background-color: var(--color-grey-3);

  border-radius: 4px;
  padding: 20px;
  margin: 0 20%;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--color-grey-4);

    border-radius: 4px;

    padding: 10px;
    h3 {
      margin: 0;
      padding: 0;
      font-weight: 700;
      font-size: 14.21px;
    }
  }
  @media (max-width: 768px) {
    margin: 0 5%;
  }
`;
