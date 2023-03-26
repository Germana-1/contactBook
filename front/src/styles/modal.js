import styled from "styled-components";

export const ModalStyled = styled.div`
  background-color: rgba(18, 18, 20, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 369px;
    height: max-content;
    background-color: var(--color-grey-4);
    padding: 22px;
    position: relative;
    border-radius: 4px;

    div {
      display: flex;
      height: 50px;
      justify-content: space-between;
      align-items: center;
      background-color: var(--color-grey-5);
      position: absolute;
      left: 0;
      top: 0;

      h2 {
        font-weight: 700;
        font-size: 14px;
        padding: 0;
      }

      span {
        cursor: pointer;
      }
    }

    form {
      margin-top: 30px;
      display: flex;
      flex-direction: column;

      label {
        align-self: start;
        font-weight: 400;
        font-size: 12.182px;
        margin: 18px 0;
      }
      input {
        background-color: var(--color-grey-5);
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

      span {
        font-weight: 400;
        font-size: 12px;
        color: var(--color-primary);
      }
      .containerBtns {
        display: flex;
        position: sticky;
        width: 100%;
        height: max-content;
        padding: 0;

        justify-content: space-between;
        .btnEdit {
          width: 70%;
        }
      }
    }
  }
`;
export const ModalDeleteStyled = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  .container {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;

    &:hover,
    &:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  }
  .btnDelete {
    background-color: #dc3545;
    color: white;
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #c82333;
    }
  }
  button {
    margin-left: 10px;
  }
`;
