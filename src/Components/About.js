import styled from "styled-components";

const About = (props) => {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutTitle>ABOUT</AboutTitle>
        <SubTitle>WHO WE ARE?</SubTitle>
        <Text>
          Since 1995, Ashwani Kumar has been satisfying thousands of customers
          from all over Europe with the perfect fit, supreme quality, timeless
          style and above all, different from the mass market. At Euro Fashions,
          we understand every person is exceptional, has distinctive needs &
          that's why every aspect is tailored suiting you. If you think you are
          hard to fit in, try us. Endeavour the combination of a perfect fit
          with finest fabrics with an exclusive and personal touch.
        </Text>
        <SubTitle>WHAT WE PROVIDE?</SubTitle>
        <Text>
          Euro Fashions have extensive range of finest high quality fabrics like super 100, 150, 180, supreme wool fabrics, linen, cotton, luxurious cashmere & many more Italian as well as British fabrics with high quality lining & stitching material. We are a full service of custom tailoring i.e. Bespoke suits and shirts which are 100% made to measure; providing a complete wardrobe planning according to your needs, personality & career.
        </Text>
      </AboutContent>
    </AboutContainer>
  );
};

// Styled Components
const AboutContainer = styled.section`
  background: url("https://bytesflow.com/cdn-cgi/image/width=1400,height=526,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2017/02/business-suit-690048_1920_21.jpg") center center/cover no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Full screen height */
  /* padding: 50px 20px; */
  color: white;
  margin-top: 60px;
`;

const AboutContent = styled.div`
  max-width: 800px;
  text-align: center;
  background: rgba(0, 0, 0, 0.5); 
  padding: 40px 30px;
  border-radius: 8px;
`;

const AboutTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 40px;
  border: 2px solid white;
  display: inline-block;
  padding: 10px 30px;
  text-transform: uppercase;
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  margin: 20px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: justify;
`;

export default About;
