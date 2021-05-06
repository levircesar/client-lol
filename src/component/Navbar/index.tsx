import React from 'react'
import { Container, Icons, Essencias, Botoes, PlayButton, Box } from './styles'
import {
  FaShoppingBag,
  FaAddressCard,
  FaAlipay,
  FaAngleRight,
  Fa500Px,
  FaDiagnoses
} from 'react-icons/fa'

const Navbar: React.FC = () => {
  return (
    <Container>
      <Box>
        <PlayButton>
          <img src="icon.png" alt="" />
          <button>JOGAR</button>
        </PlayButton>
        <Botoes>
          <FaDiagnoses />
          <h1>INICIO</h1>
          <h1>TFT</h1>
          <h1>CLASH</h1>
        </Botoes>
      </Box>

      <Icons>
        <FaShoppingBag />
        <FaAddressCard />
        <FaAlipay />
        <FaAngleRight />
        <Fa500Px />
        <Essencias>
          <div>
            <FaDiagnoses />
            <span>0</span>
          </div>
          <div>
            <FaDiagnoses />
            <span>50505</span>
          </div>
        </Essencias>
      </Icons>
    </Container>
  )
}

export default Navbar
