import React, {useState} from "react";
import {CardBody, Table} from "reactstrap";
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom'
import {Sotuv, Counter, Counter1, Pays,CleansCard,Product1} from "../../store/reducer/reducer";
import '../seles.css'
import {
    Card_Group, Card,
    Cancel, Sotish, Summa,
    IMG_TABLE, IMGS, THEAD,
     Counte, INPUT, SALEIMG
}
    from "../SalesStyledComponent";
import {toast} from "react-toastify";
import {Container, SellTables, TH} from "../../Content/ContentStyledComponent";
import {DF} from "../../../StyledComponent";
import SellCheck from "./SellCheckModal";
import sale from './no-order (1).svg'

function SellTable({card, Sotuv, Counter1, Pays,CleansCard,Product1}) {
    const [search, setSearch] = useState('')

    const [sellModals, setSellModal] = useState(false)
    const [render, setRender] = useState(true)
    const history = useHistory()


    function Cansels() {
        CleansCard("")
    }

    function Sotu() {
        if (card.length === 0) {
            toast.error('Карзинка пустой')
        } else {

            Sotuv(card)
            if (render === true) {
                setSellModal(prev => !prev)
            } else {
                setSellModal(false)
            }

        }


    }

    function ToggleCheck() {
        setSellModal(false)
        Product1()
        history.push('/sales')

    }

    function Count1(item) {
        Counter1(item)
    }

    function Pay(e, item) {
        Pays({...e, sum: item.target.value})

    }

    const p = card.reduce((total, dev) => {
        total += dev.price * dev.amount
        return total
    }, 0)

    return (
        <Container>
            <DF>
                <SellTables>
                    <Summa className={'mx-4 mt-4  sum-respons'}>

                        {new Intl.NumberFormat().format(p)} UZS
                    </Summa>
                    <Cancel className={' mt-4 mx-2'} onClick={Cansels}>Очистить</Cancel>
                    <Sotish className={' mx-4 mt-4'} onClick={Sotu}>Продавать</Sotish>

                </SellTables>
            </DF>
            <div>

                <Card_Group>
                    {
                        card.length === 0  ?
                            <div className={'d-flex justify-content-center'}>
                                <SALEIMG src={sale}  alt=""/>
                            </div>

                            :
                        <div>
                        <Card>
                        <CardBody className={'tabb'}>
                        <Table className="no-wrap v-middle tab cc" responsive>
                        <THEAD className={'thead'}>
                        <tr className="border-0">
                        <TH scope={'col'} className="border-0">№ </TH>
                        <TH scope={'col'} className={'border-0'}>Фото</TH>
                        <TH scope={'col'} className="border-0">Имя Товара  </TH>
                        <TH scope={'col'} className="border-0">О товара</TH>
                        <TH scope={'col'} className="border-0">Количество</TH>
                        <TH scope={'col'} className="border-0"> Цена </TH>
                        <TH scope={'col'} className={'border-0'}> Добавить Количество</TH>
                        </tr>
                        </THEAD>
                        <tbody>
                        {


                            card.filter(item => {
                                if (search === '') {
                                    return item
                                } else if (item.productName.toUpperCase().includes(search.toUpperCase())) {
                                    return item
                                }
                            }).map((item, index) =>


                                    <tr key={item.id} className={'bor'}>
                                        <td className={'borders'}>
                                            <div className={' d-flex index'}>
                                                {index+1}
                                            </div>
                                        </td>
                                        <td className={'borders'}>
                                            <IMG_TABLE>
                                                <IMGS className={'img-fluid mx-1 text-center'}
                                                      src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${item.imageId}`}
                                                      alt="ee"/>
                                            </IMG_TABLE>
                                        </td>
                                        <td className={'borders productName'}>
                                            <div
                                                className="d-flex mx-1 index ">{item.productName}</div>
                                        </td>
                                        <td className={'borders productName'}>
                                            <div className={'d-flex mx-2 index cursor-pointer'}>
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
                                            <div className={'d-flex index'}>

                                                <INPUT type="number" min={0} noStyle onChange={(e) => Pay(item, e)}
                                                       value={item.amount}/>
                                                <Counte className={'mx-2'} onClick={() => Count1(item)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                         height="16" fill="currentColor"
                                                         className="bi bi-x-circle" viewBox="0 0 16 16">
                                                        <path
                                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                        <path
                                                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                                    </svg>
                                                </Counte>
                                            </div>


                                        </td>
                                    </tr>

                            )}
                        </tbody>
                        </Table>
                        </CardBody>
                        </Card>
                        </div>
                    }

                    <SellCheck toggle={ToggleCheck} isopen={sellModals}/>
                </Card_Group>
            </div>

        </Container>
    )

}

function mapStateToProps(state) {
    return {
        card: state.Reducer.card,
        sellModal: state.Reducer.sellModal
    }

}

export default connect(mapStateToProps, {Sotuv, Counter, Counter1, Pays,CleansCard,Product1})(SellTable)
