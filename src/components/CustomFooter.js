import React from 'react';
import { Button } from 'react-bootstrap';

import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";

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
              <FooterLink href="https://www.facebook.com/jaunewavre">Facebook</FooterLink>
            </Column>
            <Column>
                <Heading>Newsletter</Heading>
                <input placeholder='exemple@gmail.com'></input>
            </Column>
            <Column>
                <p>Ne manquez aucune info</p>
                <Button variant='dark'>S'abonner</Button>
            </Column>
          </Row>
        </Container>
      </Box>
    );
};
export default CustomFooter;