import {AvForm,AvField} from 'availity-reactstrap-validation'
import {CloseOutlined} from '@ant-design/icons'
import {SaveProduct} from "../store/reducer/reducer";
import {connect} from "react-redux";
import axios from "axios";
import '../Content/modal.css'
import {Ximg, IMG, Submit, Container, Forma} from "../Content/ContentStyledComponent";
import React, {useState, useRef} from "react";
import Loader from "react-loader-spinner";

import {Select} from "antd";

function Form(props) {
    const toggle = useRef(null);
    const [img,setImg] = useState(null);
    const [loader,setLoader] = useState(false);
    const [category,setCategory] = useState('');

    function AddProduct(event,values) {
       const value = {
           productName:values.productName,
           price:values.price,
           amount:values.amount,
           description:values.description,
           imageId:img,
           category:category
       }
        props.SaveProduct(value)
        props.history.push('/product')
    }

    function Handel(e) {
      setLoader(true)
        const onload = e.target.files[0];

        const formData = new FormData();

        formData.append("image", onload);

        axios({
            url: "https://store-management-backend-app.herokuapp.com/api/v1/attachment",
            method: "POST",
            data: formData,
        }).then((res) => {

            setImg(res.data)
            setLoader(false)
        }).catch((err)=>{
            console.log(err);
        })
        ;


        // setLoader(true)
    }
    function Ximgs() {
       setImg('')
        setLoader(false)

    }

    function onChange(event) {
       setCategory(event)

    }

    const {Option } = Select

    return(
        <Container>
            <Forma>
                    <AvForm className={' my-4 p-2 avform'} id={"Avform"} onValidSubmit={AddProduct}>
                        <h5 className={'my-4 text-center h6'}>Добавить Продукть</h5>
                          <div className={'block'}>

                          </div>
                          <span className={'spans'}>
                               Имя Товара
                          </span>
                        <AvField
                            className={'avform-1 my-2'}
                            placeholder={'Введите имя'}
                            type={"text"}
                            name={"productName"}

                            required
                        />
                        <span className={'spans'}>
                               Цена Товара
                          </span>
                        <AvField
                            className={'avform-1 my-2'}
                            placeholder={'Введите Цена'}
                            type={"number"}
                            name={"price"}

                            required
                        />
                        <span className={'spans'}>
                             Количество Товара
                          </span>
                        <AvField
                            className={'avform-1 my-2'}
                            placeholder={'Введите Количество'}
                            type={"number"}
                            name={"amount"}

                            required
                        />
                        <span className={'spans'}>
                            Категория
                          </span>
                        <Select
                            showSearch
                            className={'category'}
                            style={{ width: '95%' }}
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
                            <Option value="santexnika">santexnika</Option>
                            <Option value="texnika">texnika</Option>

                        </Select>
                        <div className={'textarea'}>
                           <span className={''}>
                            Информация о товаре
                          </span>

                        </div>
                        <AvField
                            className={'avtext'}
                            placeholder={'Введите Информация о товаре'}
                            type={"textarea"}
                            name={"description"}
                            required
                        />

                        {
                            img ?
                                <div className={'position-relative'}>
                                    <Ximg onClick={Ximgs}> <CloseOutlined/> </Ximg>
                                </div>  :''


                        }
                        <label htmlFor={"Input"} className={'imgInput text-center mt'}>

                            {
                                img ?
                                    <IMG className={'m-auto mr-5'}>

                              <img className={' form-img'} src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${img}`} alt="reeor"/>

                                    </IMG>

                                    :
                                    <div className={'position-relative loader-div'}>
                                        {
                                            loader ?   <Loader
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
                            ref={toggle}
                            onChange={Handel}
                            className={"m-5 d-none"}
                            id={"Input"}
                        />
                        <br/>
                        <div className={'submit'}>
                            <Submit form={"Avform"} className={"my-4 "}>
                                Добавить
                            </Submit>
                        </div>

                    </AvForm>
       </Forma>

   </Container>)
}
export default connect(null,{SaveProduct})(Form)