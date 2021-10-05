import React, {useState} from "react";
import {IMG_TABLE,  IMGS, Delete, Edit} from '../SalesStyledComponent'
import {connect} from "react-redux";
import '../seles.css'

function Tables({item, index, SaveCards, card, DeleteKarzina}) {

    const [description, setDescription] = useState(false)
    const [items, setItems] = useState('')

    function ToggleDescription(item) {
        setItems(item)
        setDescription(prev => !prev)
    }

    return (

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

            <td className="index borders d-flex">
                {
                                   card.some((p) => p.productId === item.id) ? (
                                        <Delete className={'mx-3'} onClick={() => DeleteKarzina(item)}>

                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                              className="bi bi-cart-dash-fill" viewBox="0 0 16 16">
                                              <path
                                                   d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z"/>
                                           </svg>
                                        </Delete>
                                  ) : <Edit className={'mx-3'}
                                              onClick={() => SaveCards(item)}>

                                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                           className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                       <path
                                              d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                                  </svg>


                                </Edit>
                 }
            </td>
        </tr>


    )
}

function mapStateToProps(state) {
    return {
        card: state.Reducer.card
    }
}

export default connect(mapStateToProps, null)(Tables)