import React from "react";
import styled from "styled-components";
import {CategoriesI} from "../../pages/data";
import Category from "./category";
import { Mobile } from "../../pages/responsive";
const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${Mobile({ padding: "0px", flexDirection:"column" })}
`;
const Categories = ()=> {
  return (
    <Container>
      {CategoriesI.map((item) => (
        <Category item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Categories;
