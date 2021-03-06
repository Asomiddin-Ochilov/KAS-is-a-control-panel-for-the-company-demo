import {Modal} from 'reactstrap'
import { OK} from './ContentStyledComponent'
import './modal.css'
import React from "react";

function Modalss({isopendelete, toggledelete, cancel, ok}) {
    return (
        <div>
            <Modal className={'deleteModal'} isOpen={isopendelete}>
                <div className={'deleteText'}>
                    <div className={'toggleDelete'} onClick={toggledelete}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path
                                d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                        </svg>
                    </div>
                    <div style={{width:'100%',textAlign:'center'}} className={'my-2'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor"
                             className="bi bi-x-octagon delete-svg" viewBox="0 0 16 16">
                            <path
                                d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>

                    <div className={'text-body my-2'}>
                        Ты хочешь удалить
                    </div>
                    <div style={{width:'100%',height:'40%'}} className={'delete-clicked'}>
                        <OK onClick={ok}> Удалить </OK>
                    </div>

                </div>


            </Modal>
        </div>
    )
}

export default Modalss