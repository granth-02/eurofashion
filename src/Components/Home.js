// import styled from "styled-components";
// import ImgSlider from "./ImageSlider";

// const Home = (props) => {
//   return (
//     <Container>
//       <Contact>
//         <ImageContainer>
//           <img
//             src="https://wallpapers.com/images/hd/man-in-suit-pictures-vyjjbqkjo4p4yp19.jpg"
//             alt="Man in Suit"
//           />
//           <OverlayContent>
//             <h1>CUSTOM TAILORED FOR YOU</h1>
//             <p>
//               Custom tailored suits, shirts, pants, and outerwear - made to your personal
//               measurements. Contact us by clicking the button bellow.
//             </p>
//             <a href="/contact">Book Your Appointment</a>
//           </OverlayContent>
//         </ImageContainer>
//       </Contact>
//       <ImgSlider />
//     </Container>
//   );
// };

// const Container = styled.main`
//   position: relative;
//   min-height: calc(100vh - 250px);
//   overflow-x: hidden;
//   display: block;
//   top: 72px;
// `;

// const Contact = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 80vh; /* Adjust height as needed */
// `;

// const ImageContainer = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   display: flex;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover; /* Ensures the image spans the full area */
//     /* margin-top: 50px; */
//   }
// `;

// const OverlayContent = styled.div`
//   position: absolute;
//   top: 20%;
//   left: 10%;
//   z-index: 2;
//   max-width: 40%; /* Restrict text width for a neat layout */
//   text-align: left;
//   color: white;
  

//   h1 {
//     font-size: 2.5rem;
//     font-weight: 500;
//     margin-bottom: 1rem;
//     /* color: #333; */
//   }

//   p {
//     font-size: 1.1rem;
//     margin-bottom: 2rem;
//     /* color: #555; */
//     line-height: 1.6;
//   }

//   span {
//     display: block;
//     font-size: 1rem;
//     margin-bottom: 2rem;

//     a {
//       /* color: #2c5ca4; */
//       text-decoration: underline;

//       &:hover {
//         text-decoration: none;
//         color: white;
//       }
//     }
//   }

//   a {
//     padding: 14px 24px;
//     font-size: 1rem;
//     font-weight: bold;
    
//     color: white; /* Button text color */
//     /* background-color: #2c5ca4; Initial blue background */
//     border: 2px solid white; /* White border for contrast */
//     border-radius: 5px;
//     text-decoration: none;
//     transition: all 0.3s ease; /* Smooth transition for hover effects */

//     &:hover {
//         background-color: #2c5ca4; /* Transparent blue shade on hover */
//         color: white; /* Keeps the text white */
//     }
// }

// `;

// export default Home;
  
import styled from "styled-components";
import ImgSlider from "./ImageSlider";

const Home = (props) => {
  return (
    <Container>
      <Contact>
        <Content>
          <h1>CUSTOM TAILORED FOR YOU</h1>
          <p>
            Custom tailored suits, shirts, pants, and outerwear - made to your
            personal measurements. Contact us by clicking the button below.
          </p>
          <a href="/contact">Book Your Appointment</a>
        </Content>
        <ImageContainer>
          <img
            src="https://wallpapers.com/images/hd/man-in-suit-pictures-vyjjbqkjo4p4yp19.jpg"
            alt="Man in Suit"
          />
        </ImageContainer>
      </Contact>
      <Steps>
        <ImageWrapper>
          <img
            src="https://img.freepik.com/free-photo/still-life-fashion-designer-s-office_23-2150543693.jpg?ga=GA1.1.1655565684.1734342902&semt=ais_hybrid" // Replace with your desired image URL
            alt="Steps Illustration"
          />
        </ImageWrapper>
        <StepsContent>
          <Step>
            <StepNumber>1</StepNumber>
            <StepTitle>Book Your Appointment</StepTitle>
            <StepDescription>
              Book your appointment at one of our stores in the heart of London.
            </StepDescription>
          </Step>
          <Step>
            <StepNumber>2</StepNumber>
            <StepTitle>Get Measured</StepTitle>
            <StepDescription>
              Choose from our wide range of fabrics and customizations to create
              your custom items.
            </StepDescription>
          </Step>
          <Step>
            <StepNumber>3</StepNumber>
            <StepTitle>Enjoy Your Perfect Fit</StepTitle>
            <StepDescription>
              Receive your items in 3-5 weeks. Reorder at our stores or online.
            </StepDescription>
          </Step>
        </StepsContent>
      </Steps>
      <ImgSlider />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; 
  height: 80vh;
  padding: 2rem;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    height: auto;
    padding: 1rem;
    margin-top: 100px;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 600px;
  padding-right: 2rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: #555;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  a {
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 5px;
    background-color: #2c5ca4;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background-color: #1a3e7a;
    }

    @media (max-width: 768px) {
      padding: 10px 20px;
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      padding: 8px 16px;
      font-size: 0.8rem;
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: auto;
    object-fit: contain;
    border-radius: 10px;

    @media (max-width: 768px) {
      max-height: 50vh;
      margin-top: 50px;
    }

    @media (max-width: 480px) {
      max-height: 40vh;
    }
  }
`;

const Steps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  padding: 2rem;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 600px;
    object-fit: contain;
    border-radius: 10px;

    @media (max-width: 768px) {
      max-height: 300px;
      margin-bottom: 1.5rem;
    }
  }
`;

const StepsContent = styled.div`
  flex: 2;
  padding-left: 2rem;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const Step = styled.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;
`;

const StepNumber = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c5ca4;
  margin-bottom: 0.5rem;
`;

const StepTitle = styled.h2`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

export default Home;
