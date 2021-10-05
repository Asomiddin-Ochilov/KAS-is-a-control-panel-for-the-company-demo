import {Modal, ModalBody, ModalFooter} from "reactstrap";
import {AvForm, AvField} from 'availity-reactstrap-validation'
import './modal.css'
import React, {useState, useRef} from "react";
import Loader from "react-loader-spinner";
import {CloseOutlined} from "@ant-design/icons";
import axios from "axios";
import {IMG, Ximg} from "./ContentStyledComponent";
import {toast} from "react-toastify";


function Mod({isopen, toggle, save, edit, setImg}) {
    const refs = useRef()
    const [imgs, setImgs] = useState(null);
    const [loaders, setLoaders] = useState(false);

    function EditProducts(event, values) {
        save({...values, imageId: imgs})

    }

    function Handels(e) {
            setLoaders(true)
        const onloads = e.target.files[0];
        const formDatas = new FormData();
        formDatas.append("image", onloads);
        axios({
            url: "https://store-management-backend-app.herokuapp.com/api/v1/attachment",
            method: "POST",
            data: formDatas,
        }).then((res) => {
            const aa = res.data
            setImgs(aa)
            setLoaders(false)
        }).catch((err) => {
            toast.error('изображение не загружено')
        })

    }

    function Ximgs() {
        setImgs('')
        setLoaders(false)
    }

    return (
        <Modal className={'mo'} isOpen={isopen}>
            <div className={'edit-toggle'} onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path
                        d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                </svg>
            </div>
            <div className={'mh'}>

                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"
                     className="bi bi-gear my-4" viewBox="0 0 16 16">
                    <path
                        d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                    <path
                        d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                </svg>
            </div>
            <ModalBody className={'mb'}>
                <AvForm id={'forma'} onValidSubmit={EditProducts} model={edit ? edit : {}}>
                     <span className={'spans'}>
                               Имя Товара
                          </span>
                    <AvField className={'my-3 avform-1'} name={'productName'} required/>
                    <span className={'spans'}>
                               Цена Товара
                          </span>
                    <AvField className={'my-3 avform-1'} type={'number'} name={'price'} required/>
                    <span className={'spans'}>
                             Количество Товара
                          </span>
                    <AvField className={'my-3 avform-1'} type={'number'} name={'amount'} required/>

                    <span className={'spans'}>
                            Информация о товаре
                          </span>
                    <AvField type={'textarea'} className={'avform-1'} name={'description'} required/>

                </AvForm>

                {
                    imgs ?
                        <div className={'position-relative'}>
                            <Ximg onClick={Ximgs}> <CloseOutlined/> </Ximg>
                        </div>  :''


                }
                <label htmlFor={"Input"} className={'imgInput text-center mt'}>

                    {
                        imgs ?
                            <IMG className={'m-auto mr-5'}>

                                <img className={' form-img'} src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${imgs}`} alt="reeor"/>

                            </IMG>

                            :
                            <div className={'position-relative loader-div'}>
                                {
                                    loaders ?   <Loader
                                            type="TailSpin"
                                            className={'loaders'}
                                            color="rgb(59,88,255)"
                                            height={100}
                                            width={100}
                                            timeout={2000}
                                            style={{position:'absolute',zIndex:'2'}}  />
                                        :
                                        <div className={'add-photo my-2'}>
                                            <img className={'img-fluid'}
                                                 width={'200'}
                                                 src="https://cdni.iconscout.com/illustration/premium/thumb/file-management-system-3678733-3135998.png" alt=""/>
                                            <h6> загрузить фото </h6>
                                        </div>
                                }


                            </div>

                    }

                </label>


                <input
                    type="file"
                    ref={refs}
                    defaultValue={imgs}
                    onChange={Handels}
                    className={"m-5 d-none"}
                    id={"Input"}
                />
            </ModalBody>
            <ModalFooter className={'mf'}>

                <button form={'forma'} className={'btn SaveBtn'}>Сохранить</button>
            </ModalFooter>

        </Modal>
    )

}

export default Mod