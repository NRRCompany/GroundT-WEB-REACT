import React from 'react';
import data from "bootstrap/js/src/dom/data";

const modifyNumber = (time) => {
    return parseInt(time) < 10 ? "0" + time : time;
}

const getDate = () => {
    const date = new Date()
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return year + " " + month + "/" + day;
}
const getClock = () => {
    const date = new Date()
    const hour = modifyNumber(date.getHours());
    const min = modifyNumber(date.getMinutes());
    const sec = modifyNumber(date.getSeconds());

    return hour + " : " + min + " : " + sec;

}
const Main = () => {
    const homeDivWrapStyleObj = {
        display: 'flex',
        flexWrap: 'wrap',
    }

    const homDivStyleObj = {
        boxSizing: 'border-box',
        width: '50%',
        border:'1px solid black',
        padding: '10px',
    }

    return (
        <div className="homeDivWrap" style={homeDivWrapStyleObj}>
            <div className="homeDiv" style={homDivStyleObj}>
                <div>사용자 프로필</div>
                <div>
                    <ul>
                        <li>직원명 :</li>
                        <li>소속 :</li>
                        <li>직책 :</li>
                    </ul>
                </div>
            </div>
            <div  className="homeDiv" style={homDivStyleObj}>
                <div>근무 시간</div>
                <div>그래프가 들어갑니다</div>
            </div>
            <div  className="homeDiv" style={homDivStyleObj}>
                <div>근태 정보</div>
                <div>{getDate()}
                    <div>출근 버튼</div>
                    <div>퇴근 버튼</div>
                </div>
                <div>{ getClock() }</div>
            </div>
        </div>
    );
}
export default Main