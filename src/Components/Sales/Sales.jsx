import React, {useEffect, useState} from "react";
import {Input, Select, Space} from "antd";
import styled from "styled-components";
import {SaveCard, Counter, DeleteKar, Product1} from "../store/reducer/reducer";
import {connect} from "react-redux";
import Tables from "./AddShop/AddShop";
import './seles.css'
import {CardBody, Table} from 'reactstrap';
import axios from "axios";
import {COL_4, Container, Card, Card_Group} from "../Content/ContentStyledComponent";
import '../Content/modal.css'
import {DF} from "../../StyledComponent";
import ContentLoader from "react-content-loader";

function Sales({SaveCard, DeleteKar, Product1, product1}) {

    const [select, setSelect] = useState([])
    const [select1, setSelect1] = useState([
        {id: 1, status: 'santexnika'},
        {id: 3, status: 'texnika'},
    ])
    const [current, setCurrentUser] = useState([])
    const [page, setPage] = useState(1)
    const [load, setLoad] = useState(false)
    const [pages,setPages] = useState(10)
    const [pageDisable, setPageDisable] = useState(true)
    const [pageDisebled,setpageDisabled] = useState(false)
    const [pages1,setPages1] = useState(false)
    const a = ' '
    useEffect(() => {
        axios.get('https://store-management-backend-app.herokuapp.com/api/v1/product').then(res => {
            setSelect(res.data)
            const  as = res.data.filter((item, index) => index >= 0 && index < 10)
            Product1(as)
            const ss  = as.length
            setPages(ss)
            setLoad(true)
        }).catch(err => {
            alert('error')
        })

        const ss = filter(a)
        setCurrentUser(ss)
    }, [])
    const {Option} = Select;

    function filter(id) {

        return select.filter(item => (item.category === id || id === ''))

    }

    function Pagination(page) {
        return select.filter((item, index) => index >= (page - 1) * 10 && index < page * 10)

    }

    function onChange(event) {
        if (event.target.value) {
            const res = filter(event.target.value)

            Product1(res)
        } else {
            let a = ''
            const res = filter(a)
            Product1(res)
        }


    }


    const {Search} = Input;

    function searchs(value) {
        return select.filter(item => {
            if (value === '') {
                return item
            } else if (item.productName.toUpperCase().includes(value.toUpperCase())) {
                return item
            }
        })
    }
    const onSearch = value => {
        const  res =  searchs(value)
        Product1(res)
    };

    function SaveCards(data) {
        SaveCard(data)
    }

    function DeletesKarzin(data) {
        DeleteKar(data)
    }

    const THEAD = styled.thead`
     background: white;
     position: sticky !important;
     top: -50px;
    color: #4e4c4c;
        font-family: Myfont;
     font-size: 13px !important;
     box-shadow: 5px 5px 5px rgba(255,255,255 , 0.3);
      @media( max-width: 768px){
      border: 1px solid #eeebeb !important;
     width: calc(100%);
     font-size: 10px !important;
     }
     @media(min-width:800px ) and (max-width:1100px ){
     font-size: 10px !important;
     }
     
`
    useEffect(() => {

        const res = Pagination(page)

        if(pages1===true){

            if(res.length !== 10){

                setPages(prev=>prev+res.length)
                setpageDisabled(true)
            }
            else{

                setPages(prev=>prev+res.length)

            }
        }
        else{

            setPages(prev=>prev-product1.length)
        }



        Product1(res)


    }, [page])

    function PaginationPrev() {
        setPages1(false)
        if (page === 1) {

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
            <DF>
                <COL_4>


                    <Select
                        showSearch
                        className={'select-category'}
                        style={{ width: '20%' }}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        onChange={onChange}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        <Option value="">Not Identified</Option>
                        {
                            select1.map((item,index)=><Option key={item.id} value={item.status}>
                            {item.status}
                            </Option>)
                        }
                    </Select>

                    <Space direction="vertical" className={'w-60%'}>

                        <Search placeholder="Поиск..." className={'mt-4 search'} onSearch={onSearch} enterButton/>

                    </Space>
                </COL_4>
            </DF>
            {
                load ? <Card_Group>

                    <div>
                        <Card>
                            <CardBody className={'p-0  tabb'}>

                                <Table className="no-wrap v-middle tab cc p-0" responsive>
                                    <THEAD className={'thead'}>
                                        <tr className="border-0">
                                            <th className="border-0">№</th>
                                            <th className={'border-0'}>Фото Товара  </th>
                                            <th className="border-0">Имя Товара  </th>
                                            <th className="border-0"> О товара</th>
                                            <th className="border-0">Количество</th>
                                            <th className="border-0"> Цена </th>
                                            <th className={'border-0'}> покупка </th>
                                        </tr>
                                    </THEAD>
                                    <tbody>


                                    {
                                        product1.map((item, index) =>

                                            <Tables DeleteKarzina={DeletesKarzin} item={item} index={index}
                                                    SaveCards={SaveCards}/>
                                        )
                                    }

                                    </tbody>

                                </Table>
                            </CardBody>
                        </Card>

                        <nav className={'pagination-nav'}>

                            <div className={'mb-3 mx-4'}>
                                <span className={'mx-3 text-primary'}> {pages}</span>
                                Из
                                <span className={'mx-3'}> {select.length}</span>
                            </div>
                            <ul className={'pagination'}>
                                <li onClick={PaginationPrev} aria-disabled={pageDisable}
                                    className={' page-bg page-link'}>
                                    {'<'}
                                </li>


                                <li className={'page-link'}> {page}</li>

                                <li onClick={PaginationNext}

                                    className={`page-link page-bg ${pageDisebled===true ? 'd-none' : ''}` }>{'>'}</li>
                            </ul>
                        </nav>


                    </div>

                </Card_Group>

                    :   <ContentLoader
                        width={1160}
                        height={400}
                        viewBox="0 0 1200 400"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"

                    >
                        <rect x="30" y="4" rx="30" ry="30" width="40" height="40"/>
                        <rect x="100" y="18" rx="10" ry="10" width="85" height="19"/>
                        <rect x="220" y="18" rx="10" ry="10" width="169" height="19"/>
                        <rect x="419" y="18" rx="10" ry="10" width="85" height="19"/>
                        <rect x="534" y="18" rx="10" ry="10" width="169" height="19"/>
                        <rect x="733" y="18" rx="10" ry="10" width="85" height="19"/>
                        <rect x="848" y="18" rx="10" ry="10" width="169" height="19"/>
                        <rect x="1047" y="18" rx="10" ry="10" width="85" height="19"/>
                        <rect x="1162" y="18" rx="10" ry="10" width="30" height="19"/>

                        <rect x="30" y="50" rx="30" ry="30" width="40" height="40"/>
                        <rect x="100" y="60" rx="10" ry="10" width="85" height="19"/>
                        <rect x="220" y="60" rx="10" ry="10" width="169" height="19"/>
                        <rect x="419" y="60" rx="10" ry="10" width="85" height="19"/>
                        <rect x="534" y="60" rx="10" ry="10" width="169" height="19"/>
                        <rect x="733" y="60" rx="10" ry="10" width="85" height="19"/>
                        <rect x="848" y="60" rx="10" ry="10" width="169" height="19"/>
                        <rect x="1047" y="60" rx="10" ry="10" width="85" height="19"/>
                        <rect x="1162" y="60" rx="10" ry="10" width="30" height="19"/>

                        <rect x="30" y="96" rx="30" ry="30" width="40" height="40"/>
                        <rect x="100" y="102" rx="10" ry="10" width="85" height="19"/>
                        <rect x="220" y="102" rx="10" ry="10" width="169" height="19"/>
                        <rect x="419" y="102" rx="10" ry="10" width="85" height="19"/>
                        <rect x="534" y="102" rx="10" ry="10" width="169" height="19"/>
                        <rect x="733" y="102" rx="10" ry="10" width="85" height="19"/>
                        <rect x="848" y="102" rx="10" ry="10" width="169" height="19"/>
                        <rect x="1047" y="102" rx="10" ry="10" width="85" height="19"/>
                        <rect x="1162" y="102" rx="10" ry="10" width="30" height="19"/>

                        <rect x="30" y="144" rx="30" ry="30" width="40" height="40"/>
                        <rect x="100" y="144" rx="10" ry="10" width="85" height="19"/>
                        <rect x="220" y="144" rx="10" ry="10" width="169" height="19"/>
                        <rect x="419" y="144" rx="10" ry="10" width="85" height="19"/>
                        <rect x="534" y="144" rx="10" ry="10" width="169" height="19"/>
                        <rect x="733" y="144" rx="10" ry="10" width="85" height="19"/>
                        <rect x="848" y="144" rx="10" ry="10" width="169" height="19"/>
                        <rect x="1047" y="144" rx="10" ry="10" width="85" height="19"/>
                        <rect x="1162" y="144" rx="10" ry="10" width="30" height="19"/>

                        <rect x="30" y="190" rx="30" ry="30" width="40" height="40"/>
                        <rect x="100" y="190" rx="10" ry="10" width="85" height="19"/>
                        <rect x="220" y="190" rx="10" ry="10" width="169" height="19"/>
                        <rect x="419" y="190" rx="10" ry="10" width="85" height="19"/>
                        <rect x="534" y="190" rx="10" ry="10" width="169" height="19"/>
                        <rect x="733" y="190" rx="10" ry="10" width="85" height="19"/>
                        <rect x="848" y="190" rx="10" ry="10" width="169" height="19"/>
                        <rect x="1047" y="190" rx="10" ry="10" width="85" height="19"/>
                        <rect x="1162" y="190" rx="10" ry="10" width="30" height="19"/>

                        <rect x="30" y="236" rx="30" ry="30" width="40" height="40"/>
                        <rect x="100" y="236" rx="10" ry="10" width="85" height="19"/>
                        <rect x="220" y="236" rx="10" ry="10" width="169" height="19"/>
                        <rect x="419" y="236" rx="10" ry="10" width="85" height="19"/>
                        <rect x="534" y="236" rx="10" ry="10" width="169" height="19"/>
                        <rect x="733" y="236" rx="10" ry="10" width="85" height="19"/>
                        <rect x="848" y="236" rx="10" ry="10" width="169" height="19"/>
                        <rect x="1047" y="236" rx="10" ry="10" width="85" height="19"/>
                        <rect x="1162" y="236" rx="10" ry="10" width="30" height="19"/>


                        <rect x="30" y="285" rx="30" ry="30" width="40" height="40"/>
                        <rect x="100" y="285" rx="10" ry="10" width="85" height="19"/>
                        <rect x="220" y="285" rx="10" ry="10" width="169" height="19"/>
                        <rect x="419" y="285" rx="10" ry="10" width="85" height="19"/>
                        <rect x="534" y="285" rx="10" ry="10" width="169" height="19"/>
                        <rect x="733" y="285" rx="10" ry="10" width="85" height="19"/>
                        <rect x="848" y="285" rx="10" ry="10" width="169" height="19"/>
                        <rect x="1047" y="285" rx="10" ry="10" width="85" height="19"/>
                        <rect x="1162" y="285" rx="10" ry="10" width="30" height="19"/>

                        <rect x="30" y="340" rx="30" ry="30" width="40" height="40"/>
                        <rect x="100" y="340" rx="10" ry="10" width="85" height="19"/>
                        <rect x="220" y="340" rx="10" ry="10" width="169" height="19"/>
                        <rect x="419" y="340" rx="10" ry="10" width="85" height="19"/>
                        <rect x="534" y="340" rx="10" ry="10" width="169" height="19"/>
                        <rect x="733" y="340" rx="10" ry="10" width="85" height="19"/>
                        <rect x="848" y="340" rx="10" ry="10" width="169" height="19"/>
                        <rect x="1047" y="340" rx="10" ry="10" width="85" height="19"/>
                        <rect x="1162" y="340" rx="10" ry="10" width="30" height="19"/>
                    </ContentLoader>
            }



        </Container>
    )

}

function mapStateToProps(state) {
    return {
        product: state.Reducer.Product,
        card: state.Reducer.card,
        summa: state.Reducer.summa,
        product1: state.Reducer.Product1,
        load: state.Reducer.loader,
    }
}


export default connect(mapStateToProps,
    {SaveCard, Counter, DeleteKar, Product1})
(Sales)