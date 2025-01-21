import styled from "styled-components";

const Contact = (props) => {
  return (
    <Container>
      <Content>
        <Heading>Contact Us</Heading>
        <Description>
        Greetings, kindly fill out this form to book an appointment and we will reach out soon !
        Happy Styling !
        </Description>
        <IframeContainer>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScO-awSqvvvT-zpfFeqbPsl1uB3y3-iOg6V2T0eucrT542NHg/viewform?embedded=true"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="yes"
            title="Contact Form"
          >
            Loading…
          </iframe>
        </IframeContainer>
      </Content>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  background: #f9f9f9;
  min-height: 100vh;
  margin-top: 100px;
`;

const Content = styled.div`
  max-width: 900px;
  width: 100%;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Heading = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-size: 2.0rem;
  color: #2c5ca4;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-family: "Quicksand", sans-serif;
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
`;

const IframeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  border: 2px solid #2c5ca4;
  border-radius: 10px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export default Contact;
