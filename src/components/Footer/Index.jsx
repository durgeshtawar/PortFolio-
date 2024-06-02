import React from 'react';
import styled from 'styled-components';

// Define the styled-components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 background-color: ${({theme}) => theme.card_light};
  padding: 20px 24px;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  flex-wrap: wrap;  // Ensure the items wrap on smaller screens
  gap: 32px;
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    font-size: 16px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Footer = () => {
  return (
    <Container id='footer'>
      <Wrapper>
        <ContactInfo>
          <ContactItem>
            <div>Phone:</div>
            <div>7067158600</div>
          </ContactItem>
          <ContactItem>
            <div>Email:</div>
            <div>adityatawar58@gmail.com</div>
          </ContactItem>
          <ContactItem>
            <div>LinkedIn:</div>
            <div>linkedin.com/in/durgesh--tawar</div>
          </ContactItem>
        </ContactInfo>
      </Wrapper>
    </Container>
  );
}

export default Footer;
