import styled from "styled-components";

const ImageBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    flex-wrap: wrap;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    @media (max-width: 768px){
        width: 90%;
    }
`

const ImageBarDetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    span{
        font-weight: 600;
    }
`

export {ImageBarContainer, ImageBarDetailsContainer}