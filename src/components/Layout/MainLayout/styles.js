import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MainLayout = styled(motion.section)`
  background-image: url('/images/background.png');
  background-size: cover;
  background-repeat: no-repeat;

  position: fixed;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  @media (max-width: 600px) {
    background-image: url('/images/background-mobile.png');
    background-size: 100%;
    background-position: center;
  }
`
