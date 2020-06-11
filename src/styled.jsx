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
const white1 = '#EEEFEB';
const white2 = '#DFE6D9';
const green1 = '#D9DFC6';
const green2 = '#B8CCAF';
const green3 = '#82A586';
const green4 = '#436252';

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
    background-color: ${green3};
`;

export const Body = styled.div`
    min-height: 80vh;
    min-width: 100vw;
    background-color: ${white1};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const ClassList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: center;
    flex-grow: 1;
`;

export const SectionHeader = styled.div`
    font-size: 24pt;
    margin: 16px 0px 4px;
`;

export const ClassButton = styled.button`
    font-family: inherit;
    width: 200px;
    background-color: ${props => props.active ? white1 : green4};
    color: ${props => props.active ? green4 : white1};
    padding: 4px 8px 8px;
    margin: 4px;
    border: 1px solid ${green4};
    border-radius: 5px;
    font-size: 12pt;
    cursor: ${props => props.active || 'pointer'};
    &:focus {
        outline: 0;
    }
    &:hover {
        background-color: ${props => props.active || 'white'};
        color: ${green4};
    }
    &:active {
        background-color: ${props => props.active || green4};
        color: ${props => props.active || 'white'};
    }
`;

export const Options = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 10;
    flex-wrap: wrap;
`;

export const Section = styled.div`
    display: flex;
    align-items: center;
    align-content: flex-start;
    justify-content: flex-start;
    flex-grow: 1;
    flex-direction: column;
`;

export const Subsection = styled.div`
    display: flex;
    flex-grow: 1;
    width: 100%;
    justify-content: space-around;
`;

export const FuncButton = styled.button`
    font-family: inherit;
    height: 64px;
    max-width: 60%;
    flex-grow: 1;
    background-color: ${props => props.active ? white1 : green4};
    color: ${props => props.active ? green4 : white1};
    padding: 4px 8px 8px;
    margin: 4px;
    border: 1px solid ${green4};
    border-radius: 5px;
    font-size: 16pt;
    cursor: pointer;
    &:focus {
        outline: 0;
    }
    &:hover {
        background-color: white;
        color: ${green4};
    }
    &:active {
        background-color: ${green4};
        color: white;
    }
`;

export const Output = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 10;
    margin: 16px 0px;
`;

export const OutputLine = styled.div`

`;