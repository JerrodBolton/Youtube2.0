import styled from 'styled-components';
import React from 'react';
import Box from '@mui/material/Box';
import Navbar from './Navbar';
const Main = () => {
  return (
    <Box>
  <Navbar />
    </Box>
  )
}

const styledDiv = styled(Main)`
backgroundColor: '#10141D';
`;
export default styledDiv;