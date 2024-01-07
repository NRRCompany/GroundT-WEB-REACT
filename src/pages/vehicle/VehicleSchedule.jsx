import {useState} from 'react';
import moment from 'moment';
import '../../assets/css/calendar/calendar.css'
import prData from './data.json';

const DayKor = () => {
  return (
    <>
      <div className='calendar_body_head'>
        <div className='calendar_body_head_days'>
          일
        </div>
        <div className='calendar_body_head_days'>
          월
        </div>
        <div className='calendar_body_head_days'>
          화
        </div>
        <div className='calendar_body_head_days'>
          수
        </div>
        <div className='calendar_body_head_days'>
          목
        </div>
        <div className='calendar_body_head_days'>
          금
        </div>
        <div className='calendar_body_head_days'>
          토
        </div>
      </div>
    </>
  )
}

const ShowEvent = ({ days }) => {
  return (
    <>
      {
        prData.work.map((v, i) => {
          if (days.format('YYYYMMDD') === moment(v.vehicleDate).format('YYYYMMDD')) {
            return <div key = {i} onClick={() => console.log(v)} className = 'calendar_body_days_event'>{v.vehicleNumber}</div>
          }
        })
      }
    </>
  )
}

const VehicleSchedule = () => {

  const [getMoment, setMoment] = useState(moment());

  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  const calendarArr = () => {

    let result = [];
    let week = firstWeek;

    const generateDays = (index) => {
      let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');//d로해도되지만 직관성

      if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
        return (
          <div className='calendar_body_days' onClick={() => console.log(days.format('YYYYMMDD'))} key={index}>
            <span style={{color: 'red'}}>{days.format('D')}</span>
            <ShowEvent days={days} />
          </div>
        );
      } else if (days.format('MM') !== today.format('MM')) {
        return (
          <div className='calendar_body_days' onClick={() => console.log(days.format('YYYYMMDD'))} key={index}>
            <span style={{color: 'gray'}}>{days.format('D')}</span>
          </div>
        );
      } else {
        return (
          <div className='calendar_body_days' onClick={() => console.log(days.format('YYYYMMDD'))} key={index}>
            <span>{days.format('D')}</span>
            <ShowEvent days={days} />
          </div>
        );
      }
    }
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <div className='calendar_body_line' key={week} >
          {Array(7).fill(0).map((data, index) => generateDays(index))}
        </div>
      );
    }

    return result;
  }

  return (
    <div className="VehicleSchedule">
      <div className="selectDate">


      </div>
      <div className="calendar_head">
        <button className='calendar_button' onClick={() => {
          setMoment(getMoment.clone().subtract(1, 'month'))
        }}>이전달
        </button>
        <div className='calendar_head_text'>{today.format('YYYY 년 MM 월')}</div>
        <button className='calendar_button' onClick={() => {
          setMoment(getMoment.clone().add(1, 'month'))
        }}>다음달
        </button>
      </div>
      <div className='calendar_body'>
        <div className='calendar_body_box'>
          <DayKor/>
          {calendarArr()}
        </div>
      </div>
    </div>
  );
}
export default VehicleSchedule;
