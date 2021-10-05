import styled from 'styled-components'

export const Container = styled.div`
 display: flex;
 background: rgb(238,245,249);
 width: calc(100%);
 position:fixed;
 &::-webkit-scrollbar{
 width: 2px !important;
 }
 
`

export const SideBar = styled.div`
background: white;
  transition: 0.5s;
  width: calc(${props => props.hide ? '20%' : '5%'});
  overflow: hidden;
  border-radius: 0 0 40px 0 !important;
  height: 100vh;
  @media(min-width: 800px) and (max-width: 1100px){
  width: calc(${props => props.hide ? '27%' : '6%'});
  }
  @media (max-width: 800px) {
  display: none;
  position:absolute !important;
  top: 8%;
  z-index: 3 !important;
    overflow: hidden;
    height: calc(${props => props.hide ? '100%' : '0%'});
    width: calc(45%);
  }
`

export const ContentPage = styled.div`
   width: calc(100%);
   height: calc(100vh);
   overflow: auto;
    
   @media(max-width: 800px){
   background: white;
   }
   
`

export const NavbarPage = styled.div`
width: calc(100%);
height: calc(8%);
 box-shadow: -0px 5px 5px rgba(226,225,225,0.71);
z-index: 1;
position:sticky;

position:-webkit-sticky;
top: 0;
display: flex;
background: rgb(255,255,255);

`

export const Fixed = styled.div`
border-radius: 5px;
margin: 2rem auto;
background: white;
width: calc(90%);
&::-webkit-scrollbar{
width: 1px;
}
@media (max-width: 800px) {
&::-webkit-scrollbar{
width: 3px;
}
 width: calc(100%);
 margin: auto !important;
  }

box-shadow: 0 4px 4px 4px rgba(219,219,219,0.27);
overflow: auto;
`

export const NavbarLink = styled.div`
font-family: 'Rubik', sans-serif;
display: flex;
font-size: 26px;
justify-content: center;
align-items: center;
top: 0;
 width: calc(100%);
 @media(max-width: 800px){
 display: none !important; 
 }
`

export const Links = styled.div`
  display: none;
  @media (max-width: 800px) {
  display: block;
  }
  
`

export const NavItem = styled.div`
  display: block;
  margin: 0 10px;
  font-family: 'Ubuntu', sans-serif;
  @media (max-width: 800px) {
  display: none;
  }
  
`

export const SideBarItem = styled.div`
  width: calc(80%);
  height: calc(9%);
  transition: 0.5s;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  margin-right: 5px !important;
  overflow: hidden;
   border-radius: 0 10px 10px 0;
  background: transparent;
 
  &:hover{
     background: #e7e7e7;
  transition: 0.2s;
border-radius: 0 10px 10px 0;
  color: black !important;
  cursor: pointer;
  }

`

export const SIDEBarMenuIcon = styled.div`
 width: calc(98%);
 height: calc(90%) !important;
position: relative;
&:hover{
transition: 1s;
}
 
`

export const SideBarItemLOGO = styled.div`
  width: calc(100%);
  height: calc(7%);
  transition: 0.5s;
  //display: flex;
  //justify-content: space-around;
  //align-items: center;
  margin: 4px auto;
  overflow: hidden;
  background: transparent;
 

`

export const ProductIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #504e4e;

position: relative;
left: 6%;
@media(max-width: 800px){
left: 80%;
}
`

export const ProductSale1 = styled.div`
width: 28px ;
height: 28px;
background: rgb(255,0,56);
color: white;
font-size: 15px;
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
position:absolute;
top: -5px;
left: 35px;
@media(max-width: 800px){

}
`

export const  SideBarIcons = styled.div`
  width: calc(100%);
  height: calc(100%);
  display: flex;
  margin: auto !important;
  align-items: center;
  background: transparent;
 border-radius: 0 10px 10px 0;

 
`

export const  SideBarLOGO = styled.div`

  width: calc (${props=>props.hide ? '30%' : '10px'}) !important;
  height: calc(90%);
  display: flex;
  
  margin-right: 1rem !important;
  justify-content: ${props=>props.hide ? 'space-between' : 'space-between'};
  align-items:center;
  background: transparent;
  overflow: hidden ;
  margin-left: 3%;
  transition: 0.5s;
  border-radius: 5px;
  @media (min-width: 800px) and (max-width:1100px ){
 
  margin-left: 8% !important;
    .logo{
        width: 100px;
       
    }

}
`

export const H5 = styled.div`
   font-size: 16px;
  letter-spacing: 1px;
   font-family: 'Arimo', sans-serif;
   display: ${props => props.hide ? 'block' : 'none'};
 
`

export const ICONS = styled.div`
padding: 6px;
margin-left: 11px !important;
border-radius: 4px;
 color: #b1afaf;
 
   @media (min-width: 800px) and (max-width:1100px ){
 
  margin-left: -3px !important;
 
   

}
&:hover{
color: black;
}
  
`

export const LOGO = styled.div`
width: 100% !important;
margin-left: 6px !important;
overflow: hidden;
border-radius: 4px;
color: #070000 !important;
border: 1px solid saddlebrown ;
&:hover{
color: black;
}
  
`

export const MenuButton = styled.button`
  border: none;
  color: #a09f9f;
  outline: none;
  background: white;
  position: absolute;
  top: 30%;
  cursor:pointer;
  transition: 0.9s; 
  margin-left:  ${props => props.hide ? '90%' : '8px'} !important;
  transform: rotate(${props => props.hide ? '-180deg' : '0'});
  width: 6%;
  &:hover{
  color: black;
  }
       @media (max-width: 800px) {
     display: none;
  }
  @media(min-width: 800px) and (max-width: 1100px){
  top: 28%;
    margin-left:  ${props => props.hide ? '88%' : '4px'} !important;
  }
`

    export const ShopLink = styled.div`
    display: flex;

    align-items: center;
    color: #9fa19e;
      width: 6%;
      position: absolute;
      right: 130px;
      top: 30% !important;
      justify-content: space-around;
       @media (max-width: 800px) {
       display: none;
     width: calc(20%);
  }
  
`

export const DF = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const MobileMenu = styled.div`
 display: none;
 position:absolute;
 bottom: 0;
 position:fixed;
 
 
 
  @media (max-width: 800px) {
  display: block;
  background: white;
  width: calc(100%) !important;
   
  }
`

export const FooterMenu = styled.div`
width: calc(100%) !important;
display: flex;
 justify-content: space-around !important;
 align-items: center !important;
 height: calc(14%) !important;
 padding: 10px 0;
 z-index: 5 !important;
 border-radius: 20px;
 background: rgb(252,252,255);
`

export const MENUlogo = styled.div`
display: none;
justify-content: center;
align-items: center;
width: calc(20%);
@media(max-width: 800px){
display: flex;
width: calc(35%);
height: calc(100%);
margin-left: 10px;
}
`

export const SALES = styled.div`
width: 20px ;
height: 20px;
border-radius: 50%;
color: white;
background: #ec3434;
font-size: 10px;
display: flex;
justify-content: center;
align-items: center;
position:absolute;
font-weight: 500;
top: 2px;
right: 13px;
`

export const  SELECT = styled.select`
width: calc(100%);
height: calc(62%);
border-radius: 5px;
padding: 7px 7px !important;

  border: 1px solid #dbd6d6 !important;
color: #c4c2c2;
@media(max-width: 800px){
height: calc(33px);
span{
margin: auto;
}
margin: 10px 0 ;
}
    background: white !important;
    &:hover{
   border: 1px solid #dbd6d6 !important;
    }
    &:active{
       border: 1px solid #dbd6d6 !important;
       
    }
    &:focus{
      outline: none !important;
        border: 1px solid #dbd6d6 !important;
     //border:1px solid  rgb(81,86,190) !important;
    }
`

export const OPTION =styled.option`
width: calc(90%) !important;
height: 40px !important;
margin-top: 3% !important;
background: white !important;
border: none;
color: black;
outline: none;
padding: 10px !important;
&:hover::after{
background: #930909 !important;
}

`
