import styled from "styled-components";

const ShirtFilter = (props) => {
  return (
    <FilterSection>
      {/* Patterns Section */}
      <FilterContainer>
        <Title>Choose Your Pattern</Title>
        <CircleGridContainer>
          <CircleImageHolder href="/shirts/patterns/checks">
            <img src="https://img.freepik.com/premium-vector/fabric-plaid-seamless-vector-background-pattern-with-texture-check-tartan-textile_87543-22303.jpg" alt="Checks" />
            <p>Checks</p>
          </CircleImageHolder>
          <CircleImageHolder href="/shirts/patterns/HB">
            <img src="https://www.apposta.com/MTF//Content/menu/Spinato.jpg" alt="HB" />
            <p>HB</p>
          </CircleImageHolder>
          <CircleImageHolder href="/shirts/patterns/solid">
            <img src="https://cdn-gen.shabbyfabrics.com/image/350x350/pid-88370-bellasolids-9900-262-nomark.jpg?1581724800" alt="Solid" />
            <p>Solid</p>
          </CircleImageHolder>
          <CircleImageHolder href="/shirts/patterns/stripes">
            <img src="https://img.freepik.com/free-photo/stripes-fabric-textured-background_53876-32104.jpg?semt=ais_hybrid" alt="Stripes" />
            <p>Stripes</p>
          </CircleImageHolder>
          <CircleImageHolder href="/shirts/patterns/linen">
            <img src="https://img.freepik.com/free-photo/top-view-fabric-texture-background_23-2148934899.jpg" alt="Stripes" />
            <p>Linen</p>
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

const CircleImageHolder = styled.a`
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

export default ShirtFilter;
