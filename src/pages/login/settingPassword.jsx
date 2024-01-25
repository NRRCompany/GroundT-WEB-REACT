import React from 'react';
import {Link} from "react-router-dom";

const settingPassword = () => {
    const buttonStyleObj1 = {
        backgroundColor: '#B4B4B3',
        borderColor: '#B4B4B3',
        color: 'black',
        marginRight: '10px',
    }

    const buttonStyleObj2 = {
        backgroundColor: '#3282B8',
        borderColor: '#3282B8',
        color: 'white',
        width: '210px',
    }

    return (
        <div className="center-wrap">
            <div className="section text-center">
                <h4>비밀번호 설정</h4>
                <div className="form-group mt-2">
                    <input type="password" name="logpass" className="form-style" placeholder="비밀번호를 입력해주세요"
                           id="logpass"
                           autoComplete="off"/>
                    <i className="input-icon uil uil-lock-alt"></i>
                </div>
                <div className="form-group mt-2">
                    <input type="password" name="logpass" className="form-style" placeholder="비밀번호 확인"
                           id="logpass"
                           autoComplete="off"/>
                    <i className="input-icon uil uil-lock-alt"></i>
                </div>
                <div className="buttonWrap">
                    <div className="btn btn-primary" type="" style={buttonStyleObj2}>확인</div>
                </div>
            </div>
        </div>
    )
}

export default settingPassword