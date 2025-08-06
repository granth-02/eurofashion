import styled from "styled-components";
import ash from "../Images/Ash.jpg"

const About = (props) => {
  console.log("Surprise ;) : https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  return (
    <>
    <AboutContainer>
      <AboutContent>
        <AboutTitle>30 years of finesse</AboutTitle>
      </AboutContent>
    </AboutContainer>

      <TeamSection>
        <TeamMember>
          <ImageContainer>
            <img src={ash} alt="Ashwani" />
          </ImageContainer>
          <MemberDetails>
            <MemberTitle>Fashion Advisor</MemberTitle>
            <MemberName>Ashwani Kumar</MemberName>
            <MemberDescription>
              {/* Tailoring to your needs since 95 */}
            </MemberDescription>
          </MemberDetails>
        </TeamMember>
        <TeamMember>
          <ImageContainer>
            <img src="https://i.ibb.co/HfMGtb4X/kaus.jpg" alt="Kaustubh" />
          </ImageContainer>
          <MemberDetails>
            <MemberTitle>Fashion Advisor</MemberTitle>
            <MemberName>Kaustubh</MemberName>
            <MemberDescription>
              {/* Greatest Basketball Player In Surat  */}
            </MemberDescription>
          </MemberDetails>
        </TeamMember>
      </TeamSection>
      <TextContent>
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
        </TextContent>
      </>
  );
};

// Styled Components
const AboutContainer = styled.section`
  background: url("https://bytesflow.com/cdn-cgi/image/width=1400,height=526,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2017/02/business-suit-690048_1920_21.jpg")
    center center/cover no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50vh;
  color: white;
  margin-top: 60px;
`;

const AboutContent = styled.div`
  width: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 80px 30px;
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

const TeamSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 40px;
  flex-wrap: wrap;
`;

const TeamMember = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 300px;
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

const MemberDetails = styled.div`
  padding: 20px;
`;

const MemberTitle = styled.h3`
  font-size: 1rem;
  color: #555;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const MemberName = styled.h2`
  font-size: 1.5rem;
  color: #2c5ca4;
  margin-bottom: 15px;
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  margin: 20px 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #2c5ca4;
;`

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: center;
;`

const MemberDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: #666;
`;

const TextContent = styled.div`
  width: 100%;
  text-align: center;
  background: #f9f9f9;
  padding: 80px 30px;
  border-radius: 8px;
`;

export default About;
