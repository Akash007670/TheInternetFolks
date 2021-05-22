import styled from 'styled-components';

export const Description = styled.div`
z-index : 3;
max-width : 1200px;
position :absolute;
padding : 18px 24px;
display : flex;
flex-direction : row;
align-items : center;
// background-color : green;
left : 116px;
margin-top : 10px;
@media screen and (max-width : 760px) {
    display : flex;
    position : relative;
    align-items :  center;
    flex-direction : column;
    left : -10px;
}
`;

export const ContentWrapper = styled.div`
position : relative;
// margin-top : 10px;
display : grid;
@media screen and (max-width : 760px) {
    flex : 100;
    order : 2;
}
`;

export const Heading = styled.h1`
text-align : start;
// background-color : blue;
color : black;
font-size : 48px;
display : flex;
font-weight : bold;
justify-content : center;
flex-direction : row;
@media screen and  (max-width : 768px) {
    font-size : 48px;
    text-align : center;
    padding : 10px;
    margin : 15px;
}

@media screen and (max-width : 480px) {
    font-size : 32px;
    text-align : center;
}
`;

export const Para = styled.p`
text-align : start;
font-size: 18px;
flex-direction : column;
// background-color : yellow;
color: #bfbfbf;
max-width : 600px;

@media screen and  (max-width : 760px) {
    font-size : 18px;
    text-align : center;
}

`;

export const BtnWrapper = styled.div`
margin-top : 12px;
display : flex;
flex-direction : column;
align-items : start;
cursor : pointer;
@media screen and (max-width : 760px) {
    align-items : center;
    padding-bottom : 22px;
}
`;

export const Button = styled.button`
border-radius : 50px;
color : white;
background-color : #2acfcf;
white-space : nowrap;
padding : 10px 30px;
font-size : 18px;
cursor : pointer;
outline : none;
border : none;
text-decoration : none;
`;
export const Person = styled.div`
height : auto;
width : auto;
z-index : 1000;
float : left;
position : relative;
top : 2rem;
left : 2rem;

& img{
    width: 100%;
}

@media screen and (max-width : 760px) {
    display : flex;
    height : 353px;
    width : 440px;
    color : #FFFFFF;
    display : none;
}
`;  
