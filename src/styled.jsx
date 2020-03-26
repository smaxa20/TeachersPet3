import styled from 'styled-components';

/* COLOR PALET */
/* Lightest to darkest */
/* 
• rgb(238,239,235)   #EEEFEB
• rgb(223,230,217)   #DFE6D9
• rgb(217,223,198)   #D9DFC6
• rgb(184,204,175)   #B8CCAF
• rgb(130,165,134)   #82A586
• rgb(67,98,82)      #436252
*/

export const Page = styled.div`
    font-family: serif;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Header = styled.div`
    min-height: 20vh;
    min-width: 100vw;
    background-color: #82A586;
`;

export const Footer = styled.div`
    min-height: 20vh;
    min-width: 100vw;
    background-color: #436252;
`;

export const Body = styled.div`
    min-height: 60vh;
    min-width: 100vw;
    background-color: #EEEFEB;
    display: flex;
    justify-content: space-between;
`;

export const ClassList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    max-width: 80vw;
`;

export const ClassListHeader = styled.div`
    font-size: 24pt;
    align-self: center;
    margin: 16px 0px 4px;
`;

export const ClassButton = styled.button`
    font-family: inherit;
    width: 200px;
    background-color: ${props => props.active ? '#EEEFEB' : '#436252'};
    color: ${props => props.active ? '#436252' : '#EEEFEB'};
    padding: 4px 8px 8px;
    margin: 4px;
    border: 1px solid #436252;
    border-radius: 5px;
    font-size: 12pt;
    cursor: pointer;
    &:focus {
        outline: 0;
    }
    &:hover {
        background-color: white;
        color: #436252;
    }
    &:active {
        background-color: #436252;
        color: white;
    }
`;
