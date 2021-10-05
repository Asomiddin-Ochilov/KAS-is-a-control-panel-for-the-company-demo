import React, { useState} from "react";
import './App.css'
import SingUp from "./SingUp";
import {
    Container,
    ContentPage,
    Fixed,
    NavbarPage,
    SideBar,

    SideBarItem,
    SideBarIcons,
    H5,
    MenuButton,
    ShopLink,

    ICONS,
    NavbarLink,
    MobileMenu,
    FooterMenu,

    SideBarLOGO,
    SideBarItemLOGO,
    ProductIcon,

    ProductSale1, MENUlogo, SALES, SIDEBarMenuIcon
} from "./StyledComponent";
import logo from './kas.png'
import Sales from "./Components/Sales/Sales";
import Form from "./Components/Form/Form";
import History from "./Components/Content/History";
import SellTable from "./Components/Sales/SellTable/SellTable";
import AnimatedNumber from 'react-animated-number'
import { Switch, Route, NavLink,useHistory} from "react-router-dom";
import Content from './Components/Content/ContentPage'
import {connect} from "react-redux";

import useLocalStorage from 'react-use-localstorage';

function App({card}) {
    const [toggle, setToggle] = useState(false)
    const [color1, setColor] = useState('Товары')
    const [item, setItem] = useLocalStorage('name', 'true');

   const history = useHistory()
    function ToggleMenu() {
        setToggle(prev => !prev)
    }
    return (
        <div>
            {
                item === 'true' ? <SingUp log={setItem} history={history}/> :
                    <Container>

                        <SideBar hide={toggle}>

                            <SideBarItemLOGO>

                                <SideBarLOGO onClick={() => setColor('Товары')} hide={toggle}>

                                    <NavLink className={'tex'} to={'/product'}>
                                        <img className={'logo'} src={logo} alt=""/>
                                    </NavLink>

                                </SideBarLOGO>

                            </SideBarItemLOGO>

                            <SideBarItem onClick={() => setColor('Товары')}>

                                <NavLink to={'/product'} exact activeClassName={'main-nav-active'}
                                         className={'w-100 py-5 text-decoration-none'}>
                                    <SideBarIcons>

                                        <ICONS className={'mx-3 icons'}>

                                            <NavLink className={'tex'} to={'/product'} exact activeClassName={'main-nav-active'}>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                                     className="bi bi-house iconss" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd"
                                                          d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                                    <path fill-rule="evenodd"
                                                          d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                                </svg>

                                            </NavLink>

                                        </ICONS>

                                        <div>
                                            <NavLink className={'tex'} to={'/product'} exact activeClassName={'main-nav-active'}>

                                                <H5 hide={toggle}> Товары </H5>

                                            </NavLink>


                                        </div>

                                    </SideBarIcons>

                                </NavLink>

                            </SideBarItem>

                            <SideBarItem onClick={() => setColor('Продажа')}>

                                <NavLink to={'/sales'} exact activeClassName={'main-nav-active'}
                                         className={'w-100 py-5 text-decoration-none'}>

                                    <SideBarIcons>

                                        <ICONS className={'mx-3'}>

                                            <NavLink className={'tex'} to={'/sales'} exact activeClassName={'main-nav-active'}>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                                     className="bi bi-bag" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                                </svg>

                                            </NavLink>

                                        </ICONS>

                                        <div>

                                            <NavLink className={'tex'} to={'/sales'} exact activeClassName={'main-nav-active'}>

                                                <H5 hide={toggle}> Продажа </H5>

                                            </NavLink>


                                        </div>

                                    </SideBarIcons>

                                </NavLink>


                            </SideBarItem>

                            <SideBarItem onClick={() => setColor('История')}>

                                <NavLink to={'/history'} exact activeClassName={'main-nav-active'}
                                         className={'w-100 py-5 text-decoration-none'}>

                                    <SideBarIcons>

                                        <ICONS className={'mx-3'}>

                                            <NavLink to={'/history'} className={'tex'} exact activeClassName={'main-nav-active'}>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                                     className="bi bi-journal-text" viewBox="0 0 16 16">
                                                    <path
                                                        d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                                                    <path
                                                        d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                                                    <path
                                                        d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                                                </svg>

                                            </NavLink>

                                        </ICONS>


                                        <div>

                                            <NavLink to={'/history'} className={'tex'} exact activeClassName={'main-nav-active'}>

                                                <H5 hide={toggle}> История </H5>

                                            </NavLink>

                                        </div>

                                    </SideBarIcons>

                                </NavLink>

                            </SideBarItem>

                            <SideBarItem onClick={() => setColor('Добавить')}>


                                <NavLink to={'/create'} exact activeClassName={'main-nav-active'}
                                         className={'w-100 py-5 text-decoration-none'}>

                                    <SideBarIcons>

                                        <ICONS className={'mx-3'}>

                                            <NavLink to={'/create'} className={'tex'} exact activeClassName={'main-nav-active'}>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                                     fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                                    <path
                                                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path
                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                                </svg>

                                            </NavLink>

                                        </ICONS>

                                        <div>

                                            <NavLink to={'/create'} className={'tex'} exact activeClassName={'main-nav-active'}>

                                                <H5 hide={toggle}> Добавить </H5>

                                            </NavLink>


                                        </div>

                                    </SideBarIcons>

                                </NavLink>

                            </SideBarItem>

                            <SideBarItem onClick={() => setColor('Карзина')}>

                                <NavLink to={'/addshop'} exact activeClassName={'main-nav-active'}
                                         className={'w-100 py-5 text-decoration-none'}>

                                    <SideBarIcons>


                                        <ICONS className={'mx-3'}>

                                            <NavLink to={'/addshop'} className={'tex'} exact activeClassName={'main-nav-active'}>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"

                                                     className="bi bi-cart3" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                                </svg>

                                            </NavLink>

                                        </ICONS>



                                        <div>

                                            <NavLink to={'/addshop'} className={'tex'} exact activeClassName={'main-nav-active'}>

                                                <H5 hide={toggle}> Карзина </H5>

                                            </NavLink>


                                        </div>

                                    </SideBarIcons>

                                </NavLink>

                            </SideBarItem>


                            <SIDEBarMenuIcon>

                                <MenuButton hide={toggle} onClick={ToggleMenu}>


                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                         className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                    </svg>

                                </MenuButton>

                            </SIDEBarMenuIcon>

                        </SideBar>

                        <ContentPage>

                            <NavbarPage>

                                <NavLink className={'mt-2'}  to={'/product'}>

                                    <MENUlogo>

                                        <img src={logo} className={'img-fluid'} alt=""/>

                                    </MENUlogo>


                                </NavLink>

                                <NavbarLink>

                                    {color1}

                                </NavbarLink>

                                <ShopLink onClick={() => setColor('Карзина')}>

                                    <NavLink to={'/addshop'} className={'text-description-none d-flex '}>

                                        <ProductIcon>

                                            <ProductSale1>

                                                <AnimatedNumber
                                                    value={card.length}
                                                    duration={300}
                                                    style={{
                                                        transition: '3s ease-out',
                                                        transitionProperty: 'background-color, color, opacity'
                                                    }}
                                                    formatValue={n => n.toFixed(0)}
                                                />

                                            </ProductSale1>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                                 className="bi bi-cart3" viewBox="0 0 16 16">
                                                <path
                                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                            </svg>

                                        </ProductIcon>

                                    </NavLink>

                                </ShopLink>
                                <div className={'exit-block'}>
                                    <button onClick={()=>{
                                        setItem('true'); history.push('')
                                    } } className={'exit-btn'}>


                                        выход

                                    </button>
                                </div>


                            </NavbarPage>

                            <Fixed>

                                <Switch>
                                    <Route path={'/list'} component={Content}/>
                                    <Route path={'/product'} component={Content}/>
                                    <Route path={'/sales'} component={Sales}/>
                                    <Route path={'/history'} component={History}/>
                                    <Route path={'/create'} component={Form}/>
                                    <Route path={'/addshop'} component={SellTable}/>
                                    <Route   component={Content}/>
                                </Switch>

                            </Fixed>

                        </ContentPage>

                        <MobileMenu>

                            <FooterMenu>

                                <NavLink to={'/product'} exact activeClassName={'main-nav-mobile-menu'}
                                         className={'  text-decoration-none mm'}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                         className="bi bi-house" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                              d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                        <path fill-rule="evenodd"
                                              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                    </svg>

                                </NavLink>

                                <NavLink to={'/sales'} exact activeClassName={'main-nav-mobile-menu'}
                                         className={'  text-decoration-none mm'}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                         className="bi bi-bag" viewBox="0 0 16 16">
                                        <path
                                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                    </svg>

                                </NavLink>


                                <NavLink to={'/create'} exact activeClassName={'main-nav-mobile-menu'}
                                         className={'  text-decoration-none mm'}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                                         fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path
                                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg>

                                </NavLink>

                                <NavLink to={'/history'} exact activeClassName={'main-nav-mobile-menu'}
                                         className={'  text-decoration-none mm'}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                         className="bi bi-journal-text" viewBox="0 0 16 16">
                                        <path
                                            d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                                        <path
                                            d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                                        <path
                                            d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                                    </svg>

                                </NavLink>

                                <NavLink to={'/addshop'} exact activeClassName={'main-nav-mobile-menu'}
                                         className={'  text-decoration-none mm'}>

                                    <SALES>

                                        {card.length}

                                    </SALES>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                         className="bi bi-cart3" viewBox="0 0 16 16">
                                        <path
                                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg>

                                </NavLink>


                            </FooterMenu>

                        </MobileMenu>

                    </Container>
            }

        </div>

    )

}
function mapStateToProps(state) {
    return {
        card: state.Reducer.card,
        product: state.Reducer.Product
    }

}
export default connect(mapStateToProps, null)(App)