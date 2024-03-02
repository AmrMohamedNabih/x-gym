import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { clothItems } from '../../pages/data';
import Product from './product';
import { Mobile3 } from '../../pages/responsive';
import axios from 'axios';

const Container = styled.div`
  padding: 0px;
  margin: 35px;
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

const Products =() => {
  const [soort, setSort] = useState([]);
  const clothItems=[];
 
 const fetchData =async ()=>{
  try {
    const response = await axios.get('http://localhost/getproudcts/', {
        params: {
        searchValue: 1,
        },
    });
    const clothItems= response.data;
    
  
    setSort(clothItems);
  
  console.log("prducts :  ",soort);
  }catch(e){};
 }
  function handleSortChange(event) {
    const value = event.target.value;

    if (value === 'lowerPrice') {
      const temp = [...soort];
      temp.sort((a, b) => (a.Price > b.Price ? 1 : -1));
      setSort(temp);
    } else if (value === 'higherPrice') {
      const temp = [...soort];
      temp.sort((a, b) => (a.Price > b.Price ? -1 : 1)); 
      setSort(temp);
    } else {
      setSort(clothItems?soort:clothItems);
    }
    
  }
  useEffect(()=>{
    fetchData();
   },[]);
  if(soort.length)
  {
    console.log("sossu" , soort);
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
          <>
          {console.log(item)}
          <Product item={item} key={item.id} />
          </>
        ))}
      </Container>
      </div>
    );
  }else{
    return(
      <div>hallo</div>
    )
  }
  
};

export default Products;
