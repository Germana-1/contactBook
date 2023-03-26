import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 160px;

  img {
    width: 122px;
  }
`;

export const HeaderDashboardStyled = styled.header`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20%;
  border-bottom: solid 1px var(--color-grey-3);

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    margin: 10px;
    cursor: pointer;
    :hover {
      color: var(--color-primary);
    }
  }

  @media (max-width: 768px) {
    padding: 0 5%;
  }
`;
