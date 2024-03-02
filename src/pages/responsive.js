import { css } from "styled-components";

export const Mobile = (props) => {
  return css`
    @media only screen and (max-width: 585px) {
      ${props}

    },
    
  `;
};
export const Mobile2 = (props) => {
    return css`
      @media only screen and (max-width: 855px) and ( min-width: 840px ) {
        ${props}
  
      },
      
    `;
  };
  export const Mobile3 = (props) => {
    return css`
      @media only screen and (max-width: 817px) and ( min-width: 590px ) {
        ${props}
  
      },
      
    `;
  };
  