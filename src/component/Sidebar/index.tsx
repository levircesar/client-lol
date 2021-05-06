import React from 'react'
import {
  Container,
  Image,
  Box,
  Header,
  Buttons,
  Status,
  Wrapper,
  Social
} from './styles'
import { FaShoppingBag, FaAddressCard, FaAlipay, Fa500Px } from 'react-icons/fa'

const Sidebar: React.FC = () => {
  return (
    <Container>
      <Header>
        <Image>
          <div>
            <img src="profile.png" alt="" />
            <span>147</span>
          </div>
        </Image>
        <Box>
          <Buttons>
            <FaShoppingBag />
            <FaAddressCard />
            <FaAlipay />
            <Fa500Px />
          </Buttons>
          <Status>
            <h2>Leviras</h2>
            <div>
              <Wrapper>
                <span></span>
                <p>Pastel com lol</p>
              </Wrapper>
              <FaShoppingBag />
            </div>
          </Status>
        </Box>
      </Header>
      <Social>
        <div>
          <h2>Social</h2>
          <Buttons>
            <FaShoppingBag />
            <FaAddressCard />
            <FaAlipay />
            <Fa500Px />
          </Buttons>
        </div>
      </Social>
    </Container>
  )
}

export default Sidebar
