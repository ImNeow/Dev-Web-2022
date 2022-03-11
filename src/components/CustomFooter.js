import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/CustomFooter.css'

import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "../styles/FooterStyles";
  

const CustomFooter = () => {
    return (
        <Box>
        <Container>
          <Row>
            <Column>
              <Heading>Informations</Heading>
              <FooterLink href="cgv">CGV</FooterLink>
            </Column>
            <Column>
              <Heading>Social</Heading>
              <FooterLink href="https://www.facebook.com/jaunewavre" target="_blank">Facebook</FooterLink>
            </Column>
            <Column>
                <Heading>Newsletter</Heading>
                <input className='sub-input' placeholder='exemple@gmail.com'></input>
            </Column>
            <Column>
                <span style={{marginBottom:'18px ', color:'rgb(255, 253, 236)'}}>Ne manquez aucune info</span>
                <Button className='sub-button'>S'abonner</Button>
            </Column>
          </Row>
        </Container>
      </Box>
    );
};
export default CustomFooter;