import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const AttendanceManagement = () => {
    const title = {
        fontWeight: 'bold',
        fontSize: '23pt',
        marginBottom: '10px',
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
    return (
        <div>
            <div style={title}>근태관리</div>
            <div>표준근무제 : 09:00 - 18:00 </div>
            <div className="table-container">
                    <table className="attendanceManagement-table1">
                        <thead>
                            <tr>
                                <th>주간근무시간</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>기본근무시간</th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>연장근무시간</th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>주간근무시간 계</th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                    <table className="attendanceManagement-table1">
                        <thead>
                            <tr>
                                <th>휴가현황(일)</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>총 휴가일</th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>사용 휴가일</th>
                                <th></th>
                            </tr>
                            <tr>
                                <th>남은 휴가일</th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
            </div>
            <div className="button-container">
                <div className="button-left">
                    <select className="box" id="domain-list">
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                    <select className="box" id="domain-list">
                        <option value="1">1월</option>
                        <option value="2">2월</option>
                        <option value="3">3월</option>
                        <option value="4">4월</option>
                        <option value="5">5월</option>
                        <option value="6">6월</option>
                        <option value="7">7월</option>
                        <option value="8">8월</option>
                        <option value="9">9월</option>
                        <option value="10">10월</option>
                        <option value="11">11월</option>
                        <option value="12">12월</option>
                    </select>
                </div>
                <div className="button-right">
                    <div className="btn btn-primary" type="" style={buttonStyleObj1}>주말출근신청</div>
                    <div className="btn btn-primary" type="" style={buttonStyleObj2}>엑셀다운</div>
                </div>
            </div>
            <div>
                <table className="attendanceManagement-table2">
                    <thead>
                        <tr>
                            <th>날짜</th>
                            <th>출근</th>
                            <th>퇴근</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
        ;
}

export default AttendanceManagement