import styled from "styled-components";
import { Link } from "react-router-dom";

const SuitFilter = (props) => {
  return (
    <FilterSection>
      {/* Patterns Section */}
      <FilterContainer>
        <Title>Choose Your Pattern</Title>
        <CircleGridContainer>
          <CircleImageHolder to="/suits/patterns/checks">
            <img src="https://www.joelandsonfabrics.com/cdn/shop/files/25921awoolandcaratgold.jpg?v=1729698758&width=940" alt="Checks" />
            <p>Checks</p>
          </CircleImageHolder>
          <CircleImageHolder to="/suits/patterns/Solid">
            <img src="https://img.freepik.com/premium-photo/textile-texture-blue-fabric-with-white-background-blue-texture_684636-6634.jpg?semt=ais_hybrid" alt="Solid" />
            <p>Solid</p>
          </CircleImageHolder>
          <CircleImageHolder to="/suits/patterns/stripes">
            <img src="https://www.studiosuits.com/cdn/shop/files/thomasshelbypeakyblindersbrownwoolsuitlook_2_1300x.jpg?v=1734584602" alt="Stripes" />
            <p>Stripes</p>
          </CircleImageHolder>
          <CircleImageHolder to="/suits/patterns/linen">
            <img src="https://img.freepik.com/premium-vector/abstract-texture-background_179225-60.jpg" alt="Linen" />
            <p>Linen</p>
          </CircleImageHolder>
          <CircleImageHolder to="/suits/patterns/self">
            <img src="https://www.harristweedhebrides.com/cdn/shop/products/SHOP2.jpg?v=1736267385" alt="Self" />
            <p>Self</p>
          </CircleImageHolder>
        </CircleGridContainer>
      </FilterContainer>

      {/* Colors Section */}
      <FilterContainer>
        <Title>Choose Your Colour</Title>
        <CircleGridContainer>
          <CircleImageHolder to="/suits/colors/blue">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6R9z5fjo_mP9BMhhQXBbs4iqQyPI-XaYrgnp3lb1d6plH8CpK5S7KN4Ff6AMQ1fASOxSNauEibKEN4KXLHF141wJuOnvyHeBun_3FOsij5Sf8vW8d4ceQKEFeFqsuyMB6niuqNIpwGw/s1600/fabric_seamless_blue_woven_texture.jpg" alt="Blue" />
            <p>Blue</p>
          </CircleImageHolder>
          <CircleImageHolder to="/suits/colors/black">
            <img src="https://img.freepik.com/free-photo/abstract-geometric-background-shapes-texture_1194-305455.jpg?semt=ais_hybrid" alt="Black" />
            <p>Black</p>
          </CircleImageHolder>
          <CircleImageHolder to="/suits/colors/grey">
            <img src="https://img.freepik.com/free-photo/gray-fabric-textile-textured-background_53876-129707.jpg" alt="Grey" />
            <p>Grey</p>
          </CircleImageHolder>
          <CircleImageHolder to="/suits/colors/brown">
            <img src="https://img.freepik.com/premium-photo/close-up-brown-colour-cotton-fabric-tartare-background_126740-2117.jpg?semt=ais_hybrid" alt="Brown" />
            <p>Brown</p>
          </CircleImageHolder>
          <CircleImageHolder to="/suits/colors/beige">
            <img src="https://img.freepik.com/free-photo/blank-abstract-textured-background_23-2148624420.jpg" alt="Beige" />
            <p>Beige</p>
          </CircleImageHolder>
        </CircleGridContainer>
      </FilterContainer>
    </FilterSection>
  );
};

const FilterSection = styled.div`
  padding: 2rem 0;
`;

const FilterContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 20px;
  margin: 2rem auto;
  max-width: 1500px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const CircleGridContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const CircleImageHolder = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  text-decoration: none;
  color: #333;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &:hover {
      border: 5px solid #2c5ca4;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 0.5rem;
  }
`;

export default SuitFilter;