import { Card } from "flowbite-react";
import styled from "styled-components";

const CardParagraph = styled.p`
    
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const CardContainer = styled(Card)`
    img{
        height: 200px;
        object-fit: cover;
    }
`

export {CardParagraph,CardContainer}