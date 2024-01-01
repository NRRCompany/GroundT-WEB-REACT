import React from 'react';
import {Link} from "react-router-dom";

const findPassword = () => {
    const buttonStyleObj2 = {
        backgroundColor: '#3282B8',
        borderColor: '#3282B8',
        color: 'white',
        width: '200px',
    }

    return (
        <div className="center-wrap">
            <div className="section text-center">
                <h4>비밀번호 찾기</h4>
                <div className="form-group">
                    <input type="email" name="logemail" className="form-style" placeholder="User Name" id="logemail"
                           autoComplete="off"/>
                    <i className="input-icon uil uil-at">@</i>
                </div>
                <div className="buttonWrap">
                    <Link to="/settingPassword">
                        <div className="btn btn-primary" type="" style={buttonStyleObj2}>다음</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default findPassword