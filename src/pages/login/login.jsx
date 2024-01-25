import React from 'react';
import {Link} from "react-router-dom";

const login = () => {
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
    }

    return (
        <div className="center-wrap">
            <div className="section text-center">
                <h4>로그인</h4>
                <div className="form-group">
                    <input type="email" name="logemail" className="form-style" placeholder="User Name" id="logemail"
                           autoComplete="off"/>
                    <i className="input-icon uil uil-at">@</i>
                </div>
                <div className="form-group mt-2">
                    <input type="password" name="logpass" className="form-style" placeholder="Your Password"
                           id="logpass"
                           autoComplete="off"/>
                    <i className="input-icon uil uil-lock-alt">#</i>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        아이디 저장
                    </label>
                </div>
                <div className="buttonWrap">
                    <Link to="/findPassword">
                        <div className="btn btn-primary" type="" style={buttonStyleObj1}>비밀번호 찾기</div>
                    </Link>
                    <div className="btn btn-primary" type="" style={buttonStyleObj2}>로그인</div>
                </div>
            </div>
        </div>
    )
}

export default login