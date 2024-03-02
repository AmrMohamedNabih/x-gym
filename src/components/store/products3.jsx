import React, { useState } from 'react';
import styled from 'styled-components';
import { accessories } from '../../pages/data';
import Product from './product';
import { Mobile3 } from '../../pages/responsive';

const Container = styled.div`
  padding: 0px;
  margin: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${Mobile3({ justifyContent: 'center' })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option`
  padding: 10px;
  font-size: 17px;
`;

const Products3 = () => {
  const [soort, setSort] = useState(accessories);

  function handleSortChange(event) {
    const value = event.target.value;

    if (value === 'lowerPrice') {
      const temp = [...soort];
      temp.sort((a, b) => (a.price2 > b.price2 ? 1 : -1));
      setSort(temp);
    } else if (value === 'higherPrice') {
      const temp = [...soort];
      temp.sort((a, b) => (a.price2 > b.price2 ? -1 : 1)); 
      setSort(temp);
    } else {
      setSort(accessories);
    }
  }
  console.log("prducts :   ");
  return (
    <div>
<FilterContainer>
        <Filter>
          <FilterText>Sort products:</FilterText>
          <Select onChange={handleSortChange}>
            <Option value="newest">Newest</Option>
            <Option value="lowerPrice">Lower Price</Option>
            <Option value="higherPrice">Higher Price</Option>
          </Select>
        </Filter>
      </FilterContainer>
    
    <Container>
      
      {soort.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    </div>
  );
};

export default Products3;
