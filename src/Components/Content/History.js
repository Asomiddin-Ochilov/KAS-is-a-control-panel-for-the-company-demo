
import React, {useEffect, useState} from "react";
import './modal.css'

import axios from "axios";
import {
    Container,
    HistoryContent,
    CARD_Group,
    CARD_Item,
    CARD_ICONS,
    CARD_DATE,
    CARD_TEXT,
    CARD_FOOTER,
    TEXT_Header, TEXT_Body, BODY_TEXT
} from "./Index";
import ContentLoader from "react-content-loader";

import card from  './cart.png'
function History() {
    const [history, setHistory] = useState([])
    const [historytoggle, setHistorytoggle] = useState(false)

    const [Page, setPage] = useState(1)
    const [PaginationArray, setPaginationArray] = useState([])
    const [Array, setArray] = useState([])
    const [pages,setPages] = useState(9)
    const [pages1,setPages1] = useState(false)
    const [pageDisable, setPageDisable] = useState(true)
    const [pageDisebled,setpageDisabled] = useState(false)

    useEffect(() => {
        axios.get('https://store-management-backend-app.herokuapp.com/api/v1/sale/history')
            .then(res => {
                console.log(res.data)
                const fil = res.data.filter(item => {
                    if (item.productList.length !== 0) {
                        return item
                    }
                })
                console.log(fil)
                const  prod = fil.sort((a,b)=>{
                    if(a.createdAt > b.createdAt) return -1
                    if(a.createdAt < b.createdAt) return 1
                    return 0

                })
                setPaginationArray(fil)
                setArray(fil)
                setHistory(prod.filter((item, index) => index >= 0 && index < 9))
                setHistorytoggle(true)
            }).catch(err => {

        })
    }, [])
    const [value, onChange] = useState('');

    function Pagination(Page) {
        return PaginationArray.filter((item, index) => index >= (Page - 1) * 9 && index < Page * 9)

    }

    useEffect(()=>{

        const res = Pagination(Page)

        if(pages1===true){

            if(res.length !== 9){
                setPages(prev=>prev+res.length)
                setpageDisabled(true)
            }
            else{

                setPages(prev=>prev+res.length)

            }
        }
        else{

            setPages(prev=>prev-history.length)
        }



        setHistory(res)
    },[Page])

    function search(value) {
        return PaginationArray.filter(item => {
            if (value === '') {
                return item
            } else if (item.createdAt.substring(0, 10) === value) {
                return item
            }
        })
    }

    function onChanges(e) {
      const res = search(e.target.value)
        setHistory(res)
        onChange(e.target.value)
    }

    function PaginationPrev() {
        setPages1(false)
        if (Page === 1) {

            setPageDisable(true)
        } else {
            setPage(prev => prev - 1)
            setPageDisable(false)
        }
        setpageDisabled(false)
    }

    function PaginationNext() {
        setPages1(true)
        setPage(prev=>prev+1)


    }
    return (
        <Container>


            <HistoryContent>

                <div className="input-group date my-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            поиск по дате
                        </span>
                    </div>
                    <input type="date" value={value} placeholder={'поиск по дате'} className={'form-control'}
                           onChange={onChanges}/>
                </div>


                {
                    historytoggle ?

                        <CARD_Group>
                            {

                                history.map((item, index) =>{
                                    let date = new Date(item.createdAt)
                                 return   <CARD_Item>

                                        <CARD_ICONS>
                                            <img className={'img-fluid'} width={80} height={50} src={card} alt=""/>
                                        </CARD_ICONS>
                                        <CARD_DATE>
                                            <span className={'p-0'}>Дата:
                                                <span className={'Date'}>
                                            {item.createdAt.substring(0, 10)}
                                            </span>
                                            </span>
                                            <span className={'p-0'}>Время:
                                                <span className={'Date'}>

                                                        {date.getHours()+2}:{date.getMinutes()}


                                                </span>


                                            </span>
                                        </CARD_DATE>
                                        <CARD_TEXT>
                                            <TEXT_Header>
                                                <span>№</span>
                                                <span>Товар</span>
                                                <span>К...во</span>
                                                <span>Цена</span>
                                            </TEXT_Header>
                                            <TEXT_Body>
                                                {

                                                    item.productList.map((it, index) =>
                                                        <BODY_TEXT key={it.id}>
                                                            <span className={'d-flex'}>{index + 1}.</span>
                                                            <span className={'d-flex'}>{it.product.productName.substr(0,5)}</span>
                                                            <span className={'d-flex'}>{it.amount}</span>
                                                            <span className={'d-flex'}>{new Intl.NumberFormat().format(it.product.price)} UZS</span>
                                                        </BODY_TEXT>)}
                                            </TEXT_Body>
                                        </CARD_TEXT>
                                        <CARD_FOOTER>
                                            <span>Пок:
                                                <span className={'Date'}>
                                                    {item.productList.length}
                                                </span>

                                            </span>

                                            <span>Сумма:
                                                <span className={'Date'}>
                                                      {new Intl.NumberFormat().format(
                                                          item.productList.reduce((total, dev) => {
                                                              total += dev.product.price * dev.amount
                                                              return total
                                                          }, 0)
                                                      )} UZS
                                                </span>


                                                      </span>
                                        </CARD_FOOTER>
                                    </CARD_Item>}
                                )

                            }

                            <nav className={'pagination-nav my-2 m-auto'}>

                                <div className={'mb-3 mx-4'}>
                                    <span className={'mx-3 text-primary'}> {pages}</span>
                                    Из
                                    <span className={'mx-3'}> {Array.length}</span>
                                </div>
                                <ul className={'pagination'}>
                                    <li onClick={PaginationPrev} aria-disabled={pageDisable}
                                        className={' page-bg page-link'}>
                                        {'<'}
                                    </li>


                                    <li className={'page-link'}> {Page}</li>

                                    <li onClick={PaginationNext}

                                        className={`page-link page-bg ${pageDisebled===true ? 'd-none' : ''}` }>{'>'}</li>
                                </ul>
                            </nav>

                        </CARD_Group>


                        :
                        <ContentLoader
                            className={'skeleyton'}
                            width={"100%"}
                            height={400}
                            viewBox="0 0 1200 400"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"

                        >

                            <rect x="30" y="4" rx="4" ry="4" className={'skeleyton-item'}/>
                            <rect x="430" y="4" rx="4" ry="4" className={'skeleyton-item'}/>
                            <rect x="850" y="4" rx="4" ry="4" className={'skeleyton-item'}/>
                        </ContentLoader>
                }

            </HistoryContent>


        </Container>
    )

}

export default History