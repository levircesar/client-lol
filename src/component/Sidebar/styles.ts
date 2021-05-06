import styled from 'styled-components'

export const Container = styled.div`
  width: 20%;
  height: 100vh;
  background-color: ${props => props.theme.colors.primary};

  div {
    height: 80px;
    border-top: 3px solid ${props => props.theme.colors.linePrimary};
    border-bottom: 1px solid ${props => props.theme.colors.lineSecondary};
  }
`
