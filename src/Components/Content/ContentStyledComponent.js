import styled from "styled-components";

export const Card_Group = styled.div`
      justify-content: center;
      @media(max-width: 800px){
      padding: 0;
      margin-top: 10px;
      margin-bottom: 5rem;
      width: calc(98%);
      margin-left: 5px;
         border-radius:  0 !important;
      }
`
export const Card = styled.div`
  border: 1px solid rgba(255,255,255,0.1);
  margin: 0.7rem;
  padding: 0;
  @media(max-width: 800px){
   margin: 10px 1px;
   border-radius: 0 !important;
   width: calc(100%);
  }

 `
export const THEAD = styled.thead`
     background: white;
     color: #4e4c4c;
     z-index: 1;
     top: -50px;
     font-family: Myfont;
    
     
     font-size: 13px !important;
     //text-align: center;
     box-shadow: 5px 5px 5px rgba(255,255,255 , 0.3); 
     @media( max-width: 800px){
         background: white;
     width: calc(100%);
     padding: 0;
     font-size: 10px !important;
    border-radius:  0 !important;
     }
     @media(min-width: 800px) and (max-width: 1100px){
      font-size: 10px !important;
     }
`
export const IMG_TABLE = styled.div`
    width: 50px;
    height: 50px;
   
   
    overflow: hidden !important;
   
    transition: 0.4s linear;
    @media(max-width: 800px){
    margin: 0 0.5rem !important;
    }
    
    @media(min-width: 800px) and (max-width: 1100px){
     margin: 0 0.7rem !important;
    }
    &:hover{
    transform: scale(1.1);
    z-index: 333;
    
    cursor: pointer;
    transition: 0.4s linear;
    }
`
export const TD = styled.td`
     overflow: hidden;
     padding: 1rem;

    margin: auto;
    text-align: center !important;
     color: #635f5f !important;
     @media(max-width: 800px){
     width: calc(23%);
     
     }
`
export const TH = styled.th`
  @media(max-width: 800px){
  width: calc(30%) !important;
  height: calc(35px);
  font-size: 11px !important;
  border: 1px solid #eceaea !important;
  padding: 0 0 7px 0 !important;
  text-align: center !important;
  }
`
export const Edit = styled.button`
     color: #40BD84;
    background: #CAECDE ;
     font-size: 15px !important;
     border-radius: 10px;
     width: calc(20%);
     padding-top: 2px;
     @media(max-width: 800px){
     width: calc(60%);
     }
     @media(min-width: 800px) and  ( max-width: 1100px){
     width: calc(40%);
     }
     padding-bottom: 3px;
     position: relative;
     overflow: hidden;
     margin: 10px;
  transition: .2s transform ease-in-out;
  will-change: transform;
  z-index: 0;
  border: none;
  &:hover{
    color: #2a825a;
    transform: scale(1.1);
    transition: 0.3s;
    will-change: transform;
  } 
`
export const Delete = styled.button`
     background: #FED8D7;
     color: #FD6983;
      padding-top: 2px;
     font-size: 15px !important;
     border-radius: 10px;
     width: calc(20%);
     height: calc(45%);
     border: none;
     padding-bottom: 3px;
     position: relative;
     overflow: hidden;
    transition: .2s transform ease-in-out;
    will-change: transform;
   z-index: 0;
    @media(max-width: 800px){
     width: calc(60%);
     }
     
    @media(min-width: 800px) and  ( max-width: 1100px){
     width: calc(40%);
     }

  &:hover{
 
     color: #f53c5d;

    transform: scale(1.1);
    will-change: transform;
  } 
`
export const IMGS = styled.img`
       width: calc(45px);
       height: calc(45px);
         object-fit: cover;
    object-position: center center;
     border-radius: 10% !important;
     margin: auto;
     display: block;
       overflow: hidden;
`
export const SPAN = styled.span`
      font-size: 18px;
      margin: 0 10px;
`
export const Cancel = styled.div`
     color: rgb(94,129,244);
     margin: 0;
     width: 50%;
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 20px;
      padding-bottom: 1rem;
     border-right: 1px solid rgba(175,172,172,0.46);
     &:hover{
     cursor:pointer;
     }
   
`
export const OK = styled.div`
     background: rgb(255,54,72);
     color: white;
     margin: 30px 0;
     display: flex;
     padding-top:   4px;
     padding-bottom: 0.4rem;
     justify-content: center;
     align-items: center;
     //font-weight: 600;
     width: 40%;
     border-radius: 5px;
   
     
     font-family: 'Roboto Mono', monospace;
     &:hover{
     cursor:pointer;
     }
    
`
export const IMG = styled.div`
   position: relative;

    width: 100%;
    border-radius: 6px;
    height: 250px !important;
    overflow: hidden;
    margin: 1rem 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Ximg = styled.button`
     z-index: 4 !important;
      position: absolute;
      border-radius: 50%;
      right: 1.5rem !important;
      top: 1.5rem;
      font-size: 23px;
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      color: #787777;
      
      align-items: center;
      border: none;
      outline: none;
      
`
export const Submit = styled.button`
    color: white;
     background: rgb(77,77,255);
     border-radius: 10px;
     box-shadow: -0px 5px 6px rgba(194,198,196,0.44);
     width: 30%;
    font-family: 'Montserrat', sans-serif;
     padding: 5px;
    border: none;
    text-align: center;
    &:hover{
  
     transition: 0.4s;
     box-shadow: -0px 5px 6px rgba(152,158,155,0.48);
      background:rgb(32,32,224) ;
   
      }
      &:active{
      transition: 0.2s;
      transform: translateY(6px) !important;
      }
      
   
`
export const Container = styled.div`
  width: calc(100%);
`
export const Forma = styled.div`
 margin: auto;

 width: calc(40%);
 @media(max-width: 800px){
 width: calc(96%);
 margin-top: 10px !important;
 margin-bottom: 3.5rem !important;
 border: 1px solid #ffffff;
 border-radius: 10px;
 }
 @media(min-width: 800px) and (max-width: 1100px){
 width: calc(70%);
 }
`
export const COL_4 = styled.div`
display: flex;

justify-content: space-between;
align-items: center;

padding: 10px 4px;

width: calc(99%);

     @media (max-width: 800px) {
     width: calc(100%);
     margin: auto;
 
     display: flex;

justify-content: space-between;
  
`
export const SellTables = styled.div`

width: calc(95%);
display: flex;
flex-wrap: wrap;
justify-content: flex-end;
float: right;
@media(max-width: 800px ){
justify-content: center;
align-items: center;
}
`