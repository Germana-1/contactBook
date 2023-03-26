import styled from "styled-components";

export const ListStyled = styled.ul`
  background-color: var(--color-grey-3);

  border-radius: 4px;
  padding: 20px;

  margin: 0 20%;
  max-height: 80vh;
  overflow-y: scroll;

  li {
    background-color: var(--color-grey-4);
    margin-bottom: 16px;
    border-radius: 4px;
    height: 49px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0 20px;
    cursor: pointer;

    h2 {
      margin: 0;
      padding: 0;
      font-weight: 700;
      font-size: 14.21px;
    }

    span {
      color: var(--color-grey-1);
      margin-right: 10px;
      font-weight: 400;
      font-size: 12.182px;
    }
    &:hover {
      background-color: #f4dfe4;
    }
  }
  h3 {
    font-weight: 700;
    font-size: 14.21px;
  }
  @media (max-width: 768px) {
    margin: 0 5%;
  }
`;
