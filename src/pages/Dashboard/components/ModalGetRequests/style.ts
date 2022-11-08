import styled from "styled-components";

export const ContainerModalGetRequest = styled.div`
  max-width: 380px;
  width: 100%;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: var(--color-grey-1);
  position: relative;
`;

export const ModalContent = styled.form`
  padding: 1rem 0;
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:left;
  line-height:20px;
  flex-direction: column;
  gap: 2rem;

  h2 {
    letter-spacing: 2rem;
    margin-right: calc(2rem * -1);
  }

  span {
    color: var(--color-grey-3);
    text-decoration: underline;
    cursor: pointer;
  }


  .buttonClosed {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 18px;
    color: var(--color-grey-2);
  }
`;