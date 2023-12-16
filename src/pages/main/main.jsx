import React from 'react';

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
                <div>11/07 월요일
                    <div>출근 버튼</div>
                    <div>퇴근 버튼</div>
                </div>
                <div>12 : 00 : 00</div>
            </div>
        </div>
    );
}
export default Main