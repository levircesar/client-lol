import styled from 'styled-components'

export const Container = styled.div`
  width: 20%;
  height: 100vh;
  background-color: ${props => props.theme.colors.backgroundSecondary};
`
export const Header = styled.div`
  height: 80px;
  border-top: 3px solid ${props => props.theme.colors.linePrimary};
  border-bottom: 1px solid ${props => props.theme.colors.lineSecondary};
  display: flex;
`

export const Image = styled.div`
  width: 40%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    height: 80px;
    position: relative;
    transform: translateY(8%);
  }
  span {
    position: relative;
    top: -25%;
    left: 23%;
    width: 100%;
    max-width: 40px;
    height: 15px;
    border-radius: 20px;
    font-size: 8px;
    font-weight: bold;
    padding: 2px 10px;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    border: 2px solid ${props => props.theme.colors.textSecondary};
  }
  img {
    width: 100%;
    max-width: 70px;
    max-height: 70px;
    border-radius: 35px;
    border: 4px solid ${props => props.theme.colors.textSecondary};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Box = styled.div`
  width: 60%;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start !important;
`
export const Status = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  h2 {
    font-size: 17px;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    span {
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: ${props => props.theme.colors.secondary};
    }
    p {
      font-size: 13px;
      color: ${props => props.theme.colors.secondary};
    }
    svg {
      margin: 0 5px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      color: ${props => props.theme.colors.textSecondary};
      &:hover {
        color: ${props => props.theme.colors.text};
      }
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 5px;
  gap: 15px;

  svg {
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.theme.colors.textSecondary};
    &:hover {
      color: ${props => props.theme.colors.text};
    }
  }
`

export const Social = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 40px;
    color: ${props => props.theme.colors.textSecondary};

    h2 {
      font-size: 16px;
    }
  }
`
