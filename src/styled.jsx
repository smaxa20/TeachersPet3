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
    background-color: #DFE6D9;
`;