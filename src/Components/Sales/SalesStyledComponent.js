
import styled from "styled-components";


 export const IMG_TABLE = styled.div`
  width: 50px;
    height: 50px;
    
 
    overflow: hidden !important;
   
    transition: 0.4s linear;
    @media(max-width: 800px){
    margin: 0 0.5rem;
    }
    &:hover{
    transform: scale(1.1);
    z-index: 333;
  
    cursor: pointer;
    transition: 0.4s linear;
    }
    @media(min-width: 800px) and (max-width: 1100px){
    margin: 0 0.5rem;
    }
`
 export const TD = styled.td`
     padding: 1rem;
     
    
`
 export const Edit = styled.button`
     color: rgb(64,189,132);
     background: rgb(202,236,222);
     border-radius: 10px;
     display: flex;
     justify-content: center;
     align-items: center;
     height: 30px;
     box-shadow: -0px 5px 6px rgba(221,218,231,0.51);
     width: calc(36%);
     border: none;
     margin-top: 8px;
     perspective: 500px;
     transition-duration:0.4s ;
     @media(max-width: 800px){
     width: calc(60%);
     }
     &:hover{
      background: rgb(64,189,132);
      color:rgb(202,236,222) ;
      transform: scale(1.06);
 
     }
     @media(min-width: 800px) and (max-width: 1100px){
     width: calc(80%);
     }
`
export const Delete = styled.button`
     color:rgb(253,126,147);
     background:rgb(254,216,215);
     border-radius: 10px;
     display: flex;
     justify-content: center;
     align-items: center;
     height: 30px;
     box-shadow: -0px 5px 6px rgba(242,242,243,0.45);
    width: calc(36%);
     border: none;
      margin-top: 8px;
     transition-duration: 0.4s;
     &:hover{
     transform: scale(1.06);
     color: rgb(254,216,215);
     background: rgb(253,126,147);
     }
       @media(max-width: 800px){
     width: calc(60%);
     }
      @media(min-width: 800px) and (max-width: 1100px){
     width: calc(80%);
     }
`
export const IMGS  = styled.img`
        object-fit: cover;
    object-position: center center;
    width: calc(45px);
    height: calc(45px);
    border-radius: 10% !important;
     margin: auto;
     display: block;
       overflow: hidden;
`

export const Card_Group = styled.div`
 
      justify-content: center;
          @media(max-width: 800px){
      padding: 0;
      width: calc(100%);
      }
`
export const THEAD = styled.thead`
     background: white;
     position: sticky !important;
     top: -50px;
      color: #4e4c4c;
     box-shadow: 5px 5px 5px rgba(255,255,255 , 0.3);
     overflow: hidden;
        font-family: Myfont;
     font-size: 13px !important;
     @media( max-width: 800px){
     width: calc(100%);
     font-size: 10px !important;
     }
     @media(min-width: 800px) and (max-width: 1100px){
      width: calc(100%);
     font-size: 10px !important;
     }
`

export const Sotish = styled.button`
     color: white;
     background:rgb(189,173,226);
     border-radius: 6px;
     display: flex;
     justify-content: center;
     align-items: center;
     height: 40px;
     padding-bottom: 1px;
      font-family: 'Montserrat', sans-serif;
    
     width: 120px;
     border: none;
     margin: 0 2rem;
     font-weight: 600;
     font-size: 16px;
     &:hover{
     transition: 0.4s;
     background:rgb(149,115,232);
     }
`
export const Cancel = styled.button`
     color: #fcfcfc;
     background: rgb(245,151,151) ;
     border-radius: 6px;
     display: flex;
     justify-content: center;
     align-items: center;
     height: 40px;
    
     width: 110px;
     border: none;
     font-size: 15px;
     letter-spacing: 1px;
     font-weight: 600;
      font-family: 'Montserrat', sans-serif;
     padding-bottom: 1px;
     &:hover{
     transition: 0.4s;
     background:rgb(234,103,103) ;
     }
`
export const Summa = styled.div`
     color: white;
     background: rgb(250,220,76);
     border-radius: 7px;
     display: flex;
     align-items: center;
     height: 40px;
     box-shadow: -0px 5px 6px rgb(243,242,242);
     //width: 60px;
    padding-top: 4px;
    padding-left: 10px;
    padding-right: 10px;
     border: none;
      font-family: Myfont;
`
export const Card = styled.div`
  border: 1px solid rgba(255,255,255,0.1);
  margin: 0.7rem;
  padding: 0;
  @media(max-width: 800px){
   margin: 10px auto;
   width: calc(98%);
  }

 `

export const Counte = styled.button`
     color: white;
     background: rgb(246,30,76);
     border-radius: 10px;
     display: flex;
     justify-content: center;
     align-items: center;
     height: 30px;
     margin: 0 20px !important;
     width: 60px;
     border: none;
`
export const INPUT = styled.input`
    width: 70px;
    outline: none;
    padding-left: 10px;
    border: 1px solid rgba(160,157,157,0.76);
    box-shadow: -0px 4px 4px rgba(255,255,255,0.2);
    border-radius: 10px;
`
export const SALEIMG  = styled.img`
    width: calc(40%);
    margin: 2rem auto !important;
`