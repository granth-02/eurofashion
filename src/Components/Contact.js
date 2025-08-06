import styled from "styled-components";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <Container>
      <Content>
        <Heading>Get In Touch</Heading>

        {/* Our Next Visit Section */}
        <VisitCard>
          <IconWrapper>
            <FaCalendarAlt size={40} />
          </IconWrapper>
          <Title>Our Next Visit</Title>
          <Text><strong>Switzerland</strong></Text>
          <Text><strong>From:</strong> 9th September, 2025</Text>
          <Text><strong>To:</strong> 16th September, 2025</Text>
          <Text><strong>Germany, Belgium, Luxembourg</strong> </Text>
          <Text><strong>From:</strong> 21st September, 2025</Text>
          <Text><strong>To:</strong> 16th October, 2025</Text>
        </VisitCard>

        <Grid>
          <Card>
            <IconWrapper>
              <FaMapMarkerAlt size={40} />
            </IconWrapper>
            <Title>Address</Title>
            <Text><strong>Euro Fashions</strong></Text>
            <Text>TST PO Box 95795</Text>
            <Text>Kowloon, Hong Kong</Text>
          </Card>

          <Card>
            <IconWrapper>
              <FaPhoneAlt size={40} />
            </IconWrapper>
            <Title>Phone</Title>
            <Text>+49 160 506 5225</Text>
            <Text>+41 79 3888 336 </Text>
            <Text>+91 94263 93946  </Text>
          </Card>

          <Card>
            <IconWrapper>
              <FaEnvelope size={40} />
            </IconWrapper>
            <Title>Email</Title>
            <Text><strong>Request An Appointment</strong></Text>
            <Text>ashwanihk@gmail.com </Text>
          </Card>
        </Grid>
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
  background: #2c5ca4;
  min-height: 100vh;
  margin-top: 50px;
`;

const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  text-align: center;
`;

// Our Next Visit Card
const VisitCard = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 30px;
`;

const Heading = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-size: 2.2rem;
  color: #fff;
  margin-bottom: 30px;
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 1.8rem;
    margin-top: 60px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const IconWrapper = styled.div`
  background: #2c5ca4;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  color: white;

  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
  }
`;

const Title = styled.h2`
  font-size: 1.4rem;
  color: #2c5ca4;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  color: #333;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export default Contact;
