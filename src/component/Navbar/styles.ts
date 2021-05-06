import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  align-content: center;
  flex-wrap: wrap;

  background-color: ${props => props.theme.colors.background};
  border-top: 3px solid ${props => props.theme.colors.linePrimary};
  border-bottom: 1px solid ${props => props.theme.colors.lineSecondary};

  h1 {
    color: ${props => props.theme.colors.textSecondary};
    margin: 0;
    font-size: 16px;
    cursor: pointer;
  }
`
export const Icons = styled.div`
  color: ${props => props.theme.colors.linePrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  svg {
    margin: 0 10px;
    font-size: 16px;
    cursor: pointer;
    color: ${props => props.theme.colors.textSecondary};
    &:hover {
      color: ${props => props.theme.colors.text};
    }
  }

  @media (max-width: 1010px) {
    display: none;
  }
`

export const Botoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0 20px;
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.theme.colors.textSecondary};
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.colors.text};
    }
  }

  svg {
    margin: 0 10px;
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.theme.colors.textSecondary};
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.colors.text};
    }
  }
`

export const Essencias = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  margin: 0 20px;
  border-left: 2px solid ${props => props.theme.colors.lineSecondary};
  div {
    cursor: pointer;
    margin: 5px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    span {
      color: ${props => props.theme.colors.textSecondary};
    }
  }
`

export const PlayButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
    position: relative;
    left: 40px;
  }
  button {
    width: 100px;
    cursor: pointer;
    height: 40px;
    background-color: ${props => props.theme.colors.background};
    border: 3px solid ${props => props.theme.colors.linePrimary};
    color: ${props => props.theme.colors.text};
    padding-left: 15px;
    font-size: 16px;
    font-weight: bold;

    &:hover {
      background-color: ${props => props.theme.colors.primary};
      border: 3px solid ${props => props.theme.colors.lineSecondary};
    }
  }
`
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
