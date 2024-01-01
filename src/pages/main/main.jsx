import React, {useEffect, useState} from 'react';
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
const getTime = () => {
    const date = new Date()
    const hour = modifyNumber(date.getHours());
    const min = modifyNumber(date.getMinutes());
    const sec = modifyNumber(date.getSeconds());

    return hour + " : " + min + " : " + sec;

}

const Main = () => {
    const [time, setTime] = useState(getTime);
    useEffect(()=> {
        const timer = setInterval(()=> {
            setTime(getTime());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    })
    const homeDivWrapStyleObj = {
        display: 'flex',
        flexWrap: 'wrap',
    }

    const homeDivStyleObj = {
        boxSizing: 'border-box',
        width: '40%',
        border:'1px solid #B4B4B3',
        borderRadius: '15px 15px 15px 15px',
        padding: '20px',
        margin: '5px',
    }

    const homeDivTitleStyleObj = {
        fontSize: '20pt',
    }

    const dateStyleObj = {
        float: 'left',
        marginRight: '40%',
        fontSize: '15pt',
    }

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

    const timeStyleObj = {
        fontSize: '23pt'
    }



    return (
        <div className="homeDivWrap" style={homeDivWrapStyleObj}>
            <div className="homeDiv" style={homeDivStyleObj}>
                <div className="homeDivTitle" style={homeDivTitleStyleObj}>사용자 프로필</div>
                <div>
                    <div>직원명 : </div>
                    <div>소속 : </div>
                    <div>직책 : </div>
                </div>
            </div>
            <div className="homeDiv" style={homeDivStyleObj}>
                <div className="homeDivTitle" style={homeDivTitleStyleObj}>근무 시간</div>
                <div>
                    <div className="progress-bar">
                        <div className="progress">

                        </div>
                    </div>
                    <div>0시간</div>
                </div>
            </div>
            <div className="homeDiv" style={homeDivStyleObj}>
                <div className="homeDivTitle" style={homeDivTitleStyleObj}>근태 정보</div>
                <div>
                    <div style={dateStyleObj}> {getDate()} </div>
                    <div className="btn btn-primary" type="" style={buttonStyleObj1}>출근 버튼</div>
                    <div className="btn btn-primary" type="" style={buttonStyleObj2}>퇴근 버튼</div>
                </div>
                <div style={timeStyleObj}>{ time }</div>
            </div>
        </div>
    );
}
export default Main