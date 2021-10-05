import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import {
    SaveProduct, EditProducts,
    DeleteProduct,
    Counter, Counter1, Product1
}
    from "../store/reducer/reducer";
import {Input, Select, Space} from "antd";
import 'antd/dist/antd.css';

import Modals from './Modal'
import {CardBody, Table} from "reactstrap";
import Modalss from "./DeleteModal";
import './modal.css'
import axios from "axios";
import Description from "./DescriptionModal";
import ContentLoader from "react-content-loader"
import {
    Card_Group, Card,
    IMGS, IMG_TABLE, Edit,
    THEAD, Delete, Container, COL_4
} from "./ContentStyledComponent";

import {DF,} from "../../StyledComponent";



function ContentPage(
    {
        EditProducts, DeleteProduct,
        Product1, product1,
    }
) {
    console.log(product1)

    const [openModal, setModal] = useState(false)
    const [edit, setEdit] = useState('')

    const [load, setLoad] = useState(false)
    const [DeleteModal, setDeleteModal] = useState(false)
    const [Yes, setNow] = useState(null)
    const [select, setSelect] = useState([])
    const [select2, setSelect2] = useState([])
    const [current, setCurrentUser] = useState([])
    const [description, setDescription] = useState(false)
    const [descriptionModal, setDescriptionModal] = useState('')
    const [page, setPage] = useState(1)
    const [pageDisable, setPageDisable] = useState(true)
    const [pageDisebled, setpageDisabled] = useState(false)
    const a = ''
    const [select1, setSelect1] = useState([
        {id: 1, status: 'santexnika'},
        {id: 3, status: 'texnika'},
    ])
    const [pages, setPages] = useState(10)
    const [pages1, setPages1] = useState(false)

    const {Search} = Input;

    function search(value) {
        return select.filter(item => {
            if (value === '') {

                return item
            } else if (item.productName.toUpperCase().includes(value.toUpperCase())) {
                return item
            }
        })
    }

    const onSearch = value => {
        const res = search(value)
        Product1(res)
    };

    function CloseDescription() {

        setDescription(prev => !prev)
    }

    function ToggleDescription(item) {

        setDescriptionModal(item)
        setDescription(prev => !prev)

    }


    function onChange(event) {
        console.log(event)
        if (event) {
            const res = filter(event, page)

            Product1(res)
        } else {
            let a = ''
            const res = filter(a)
            Product1(res)
        }


    }

    function filter(id) {

        return select.filter(item => (item.category === id || id === ''))

    }

    function Pagination(page) {

        return select.filter((item, index) => index >= (page - 1) * 10 && index < page * 10)

    }

    function EditSave(values) {

        EditProducts({...values, id: edit.id, category: edit.category})
        
        setModal(false)

    }

    useEffect(()=>{

        axios.get('https://store-management-backend-app.herokuapp.com/api/v1/product')
            .then(res => {
                const as = res.data.filter((item, index) => index >= 0 && index < 10)
                Product1(as)
            }).catch(err => {

        })

    },[EditSave,Ok])

    function EditProduct(item) {

        setEdit(item)
        setModal(prev => !prev)
    }

    function Ok() {
        const id = Yes
        DeleteProduct(id)
        setDeleteModal(false)
    }

    function ToggleModal() {
        setDeleteModal(prev => !prev)

    }

    function CancelToggle() {
        setDeleteModal(false)
    }

    function Deletes(id) {

        setDeleteModal(prev => !prev)
        setNow(id)
    }

    useEffect(() => {

        axios.get('https://store-management-backend-app.herokuapp.com/api/v1/product')

            .then(res => {

                setSelect(res.data)

                setSelect2(res.data)

                const as = res.data.filter((item, index) => index >= 0 && index < 10)

                Product1(as)

                const ss = as.length

                setPages(ss)

                setLoad(true)

            }).catch(err => {

        })

        const ss = filter(a)
        setCurrentUser(ss)
    }, [])


    useEffect(() => {

        const res = Pagination(page)

        if (pages1 === true) {

            if (res.length !== 10) {
                setPages(prev => prev + res.length)
                setpageDisabled(true)
            } else {

                setPages(prev => prev + res.length)

            }
        } else {

            setPages(prev => prev - product1.length)
        }


        Product1(res)

    }, [ page])


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
        setPage(prev => prev + 1)

        setPageDisable(false)
    }

    const {Option} = Select;
    return (
        <Container>


            <DF>
                <COL_4>


                    <Select
                        showSearch
                        className={'select-category'}
                        style={{width: '20%'}}
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
                            select1.map((item, index) => <Option key={item.id} value={item.status}>
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
                 load ?
                    <Card_Group>
                        <div>
                            <Card>
                                <CardBody className={'p-0 table-responsive-sm tabb mt-2 orders'}>

                                    <Table className="no-wrap v-middle tab cc  borders" responsive>
                                        <THEAD className={'thead'}>
                                            <tr className="border-0">
                                                <th scope={'col'} className="border-0 ">№</th>
                                                <th scope={'col'} className={'border-0 '}>Фото Товара </th>
                                                <th scope={'col'} className="border-0 ">Имя Товара </th>
                                                <th scope={'col'} className="border-0 mr-1">О товара</th>
                                                <th scope={'col'} className="border-0 ">Количество</th>
                                                <th scope={'col'} className="border-0 "> Цена</th>
                                                <th scope={'col'} className={'border-0 '}> Изменит Удалить</th>
                                            </tr>
                                        </THEAD>
                                        <tbody className={'borders'}>
                                        {
                                            product1.map((item, index) =>

                                                <tr key={item.id} className={'bor'}>
                                                    <td className={'borders'}>
                                                        <div className={' d-flex index'}>
                                                            {item.id}
                                                        </div>
                                                    </td>
                                                    <td className={'borders'}>
                                                        <IMG_TABLE>
                                                            <IMGS className={'img-fluid mx-1 text-center'}
                                                                  src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${item.imageId}`}
                                                                  alt="ee"/>
                                                        </IMG_TABLE>
                                                    </td>
                                                    <td className={'borders'}>
                                                        <div
                                                            className="d-flex mx-1 index">{item.productName}</div>
                                                    </td>
                                                    <td className={'borders'}>
                                                        <div className={'d-flex mx-2 index cursor-pointer'}
                                                             onClick={() => ToggleDescription(item.description)}>
                                                            {item.description.substring(0, 10)}...
                                                        </div>
                                                    </td>

                                                    <td className={'borders'}>

                                                        <div className={'d-flex mx-2 index'}> {item.amount} </div>
                                                    </td>
                                                    <td className={'borders'}>
                                                        <div
                                                            className={'d-flex mx-2 index'}>{new Intl.NumberFormat().format(item.price)}
                                                            <span className={' mx-1'}> UZS</span></div>
                                                    </td>

                                                    <td className="index borders">
                                                        <div className={'d-flex align-items-center'}>
                                                            <Edit onClick={() => EditProduct(item)} className={'mx-3'}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="18"
                                                                     height="18" fill="currentColor"
                                                                     className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                                    <path fill-rule="evenodd"
                                                                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                                                </svg>
                                                            </Edit>
                                                            <Delete onClick={() => Deletes(item.id)}
                                                                    className={''}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="18"
                                                                     height="18" fill="currentColor" className="bi bi-trash"
                                                                     viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                                    <path fill-rule="evenodd"
                                                                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                                                </svg>

                                                            </Delete>

                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                        <Description isopen={description} toggle={CloseDescription}
                                                     item={descriptionModal}/>

                                        <Modalss isopendelete={DeleteModal} toggledelete={ToggleModal} ok={Ok}
                                                 cancel={CancelToggle}/>


                                    </Table>
                                </CardBody>
                            </Card>

                            <nav className={'pagination-nav'}>

                                <div className={'mb-3 mx-4 page-texts'}>
                                    <span className={'mx-3 text-primary page-texts'}> {pages}</span>
                                    Из
                                    <span className={'mx-3 page-texts'}> {select.length}</span>
                                </div>
                                <ul className={'pagination'}>
                                    <li onClick={PaginationPrev} aria-disabled={pageDisable}
                                        className={ `page-bg page-link ${pageDisable===true ? 'd-none' : ''}`}>
                                        {'<'}
                                    </li>


                                    <li className={'page-link'}> {page}</li>

                                    <li onClick={PaginationNext} aria-disabled={pageDisebled}

                                        className={`page-link page-bg ${pageDisebled === true ? 'd-none' : ''}`}>{'>'}</li>
                                </ul>
                            </nav>
                        </div>

                        <Modals edit={edit} isopen={openModal} toggle={EditProduct} save={EditSave}/>

                    </Card_Group>
                     :
                    <ContentLoader
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
        load: state.Reducer.loader,
        product1: state.Reducer.Product1

    }
}

export default connect(mapStateToProps, {
    Product1,
    SaveProduct,
    EditProducts,
    DeleteProduct,
    Counter,
    Counter1
})

(ContentPage)
