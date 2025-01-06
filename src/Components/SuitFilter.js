import styled from "styled-components";

const SuitFilter = (props) => {
    return (
      <Filter>
                <FilterOption>
                  <a>Pattern</a>
                  <Dropdown>
                    <a href="/suits/patterns/checks">Checks</a>
                    <a href="/suits/patterns/HB">HB</a>
                    <a href="/suits/patterns/simple">Simple</a>
                    <a href="/suits/patterns/stripes">Stripes</a>
                    <a href="/suits/patterns/POW">POW</a>
                  </Dropdown>
                </FilterOption>

                <FilterOption>
                  <a>Color</a>
                  <Dropdown>
                    <a href="/suits/colors/blue">Blue</a>
                    <a href="/suits/colors/grey">Grey</a>
                    <a href="/suits/colors/black">Black</a>
                    <a href="/suits/colors/charcoal">Charcoal</a>
                    <a href="/suits/colors/brown">Brown</a>
                  </Dropdown>
                </FilterOption>
            </Filter>
    )
}

const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  margin: 1rem auto;
  background-color: #2c5ca4;
  border-radius: 50px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 200px;
  position: relative;
  margin-bottom: 10px;

  a {
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 0.4rem 1rem;
    text-decoration: none;
    color: white;
    transition: 0.3s ease;
    border-radius: 20px;
    margin: 0 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: #2c5ca4;
    }

    &.active {
      background-color: white;
      color: #2c5ca4;
      font-weight: bold;
    }
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 2.1rem; /* Adjust based on the main filter height */
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: none;
  flex-direction: column;
  padding: 1rem;
  z-index: 100;

  a {
    font-size: 0.9rem;
    color: #2c5ca4;
    padding: 0.5rem;
    text-align: center;
    border-radius: 5px;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const FilterOption = styled.div`
  position: relative;

  &:hover ${Dropdown} {
    display: flex;
  }
`;

export default SuitFilter