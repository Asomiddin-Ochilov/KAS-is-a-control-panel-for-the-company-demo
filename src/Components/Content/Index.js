import styled from 'styled-components'


export const Container = styled.div`
  width: calc(100%);
`

export const HistoryContent = styled.div`
   width: calc(97%);
   margin: 1rem auto;
   @media(max-width: 800px){
   margin-top: 10px;
   margin-bottom: 5rem !important;
   //border: 1px solid #d9d5d5;
   border-radius: 10px;
   }
`
export const CARD_Group = styled.div`
width: calc(100%);
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`

export const CARD_Item = styled.div`
width: calc(27%); 
height: calc(400px)  !important;
border-radius: 10px;
border: 1px solid #d2d2d2;
display: flex;
background: rgba(250,246,246,0.55);
justify-content: center;
flex-wrap: wrap;
margin: 10px 0;
box-shadow: 0 5px 5px 2px rgba(241,241,241,0.75);
@media(max-width: 800px){
width: calc(90%);
}
@media(min-width: 800px) and (max-width: 1100px){
width: calc(45%);
}
`

export const CARD_ICONS = styled.div`
width: calc(90%);
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
height: calc(30%) !important;
margin: 20px 0;

`

export const CARD_DATE = styled.div`
 width: calc(100%);
 height: calc(2%) !important;
font-size: 13px;
 margin: 10px 0;
 font-weight: 600;
 font-family: 'Montserrat', sans-serif;
 display: flex;
 justify-content: space-between;
align-items: center !important;
padding: 0 13px;
`

export const CARD_TEXT = styled.div`
width: calc(96%);
height: 30% !important;
border: 1px solid #efefef;
border-radius: 5px;

padding: 3px;

`

export const TEXT_Header = styled.div`
background: white;
display: flex;
padding: 0 2px;
color: black;
font-weight: 600;
font-size: 13px;
 font-family: 'Montserrat', sans-serif;
justify-content: space-between;

`

export const TEXT_Body = styled.div`
background: #fdf9f9;
border: 1px solid rgba(255,254,254,0.6);
display: flex;
height: 80%;
flex-wrap: wrap;
overflow: auto !important;
justify-content: center;
padding: 0 2px;
&::-webkit-scrollbar{
width: 2px;
}
`

export const BODY_TEXT = styled.div`
width: 100%;
height:30% ;
display: flex;
justify-content: space-between;
border: 1px solid #f5f2f2;
margin: 2px 0;
font-weight: 400;
 font-family: 'Montserrat', sans-serif;

font-size: 12px !important;

`

export const CARD_FOOTER = styled.div`
width: calc(96%);
 font-weight: 600;
 font-family: 'Montserrat', sans-serif;
display: flex;
color: black;
font-size: 13px;
padding: 0 10px;
justify-content: space-between;

`