import React, {useState} from "react";
import logo from "./kas.png";

function SingUp(props) {
    const [labelLogin, setLabelLogin] = useState('');
    const [labelPassword, setLabelPassword] = useState('');
    const [inputLogin, setInputLogin] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    function submitLogin() {
        if(inputLogin === 'KasLogin@1234' && inputPassword === 'KasPassword@1234') {

                      props.log('false')
            props.history.push('/product')

        }
        if(inputLogin !=='KasLogin@1234' ) {
            setLabelLogin(' Неверный логин.')
        }
        else {
            setLabelLogin('')
        }
        if(inputPassword!=='KasPassword@1234'){
            setLabelPassword('Неверный пароль.')
        }
        else{

            setLabelPassword('')
        }

    }
    return(
        <div>
            <div className={'LoginOut'}>
                <img src={logo} className={''} width={150}  alt=""/>
                <div className={'labels'}>
                    Логин
                </div>
                <input maxLength={20} onChange={(event)=>setInputLogin(event.target.value)}
                       className={'form-control input '} placeholder={'Введите логин'} type="text"/>
                <div className={'errors'}>
                    {labelLogin}
                </div>

                <div className={'labels'}>
                    Пароль
                </div>

                <input maxLength={20} onChange={(event)=>setInputPassword(event.target.value)}
                       className={'form-control input '} placeholder={'Введите пароль'} type="text"/>

                <div className={'errors'}>
                    {labelPassword}
                </div>

                <button onClick={submitLogin} className={'submit-login'}>Войти</button>
            </div>
        </div>
    )

}
export default SingUp