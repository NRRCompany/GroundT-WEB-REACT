import React, {useState} from 'react';
import * as PropTypes from "prop-types";
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import VehicleStatusPopup from "./VehicleStatusPopup";

const Vehicle = ({ vehicle }) => {

  const [showPopup, setShowPopup] = useState(false);

  const handlePopupShow = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };
  return (
    <tr>
      <td>{vehicle.vehicleNumber}</td>
      <td>{vehicle.vehicleKind}</td>
      <td>{vehicle.vehicleDate}</td>
      <td>{vehicle.vehicleTime}</td>
      <td>{vehicle.vehicleReturnDate}</td>
      <td>{vehicle.vehicleReturnTime}</td>
      <td>{vehicle.employeeName}</td>
      <td>{vehicle.mileage} km</td>
      <td>{vehicle.amountOil} L</td>
      <td>
        {vehicle.returnStatus ? (
          '반납 완료'
        ) : (
          <>
            <Button variant="primary" onClick={handlePopupShow}>
              미반납
            </Button>
            {showPopup && (
              <VehicleStatusPopup
                show={showPopup}
                handleClose={handlePopupClose}
              />
            )}
          </>
        )}
      </td>
    </tr>
  );
}

Vehicle.propTypes = {
  vehicle: PropTypes.shape({
    id: PropTypes.number,
    vehicleNumber: PropTypes.string,
    vehicleKind: PropTypes.string,
    vehicleDate: PropTypes.string,
    vehicleTime: PropTypes.string,
    vehicleReturnDate: PropTypes.string,
    vehicleReturnTime: PropTypes.string,
    employeeName: PropTypes.string,
    mileage: PropTypes.number,
    amountOil: PropTypes.number,
    returnStatus: PropTypes.bool
  }),
};

Vehicle.propTypes = {vehicle: PropTypes.any};

const VehicleStatus = () => {
  const vehicles =[
    {
      id: 1,
      vehicleNumber: '111가1111',
      vehicleKind: '카니발',
      vehicleDate: '2024년 01월 11일',
      vehicleTime: '11시',
      vehicleReturnDate: '2024년 01월 12일',
      vehicleReturnTime: '11시',
      employeeName: '로디',
      mileage: 100,
      amountOil: 99.1,
      returnStatus: true
    },
    {
      id: 2,
      vehicleNumber: '222나2222',
      vehicleKind: '스포티지',
      vehicleDate: '2024년 01월 11일',
      vehicleTime: '11시',
      vehicleReturnDate: '2024년 01월 12일',
      vehicleReturnTime: '11시',
      employeeName: '로디',
      mileage: 200,
      amountOil: 99.2,
      returnStatus: true
    },
    {
      id: 3,
      vehicleNumber: '333다3333',
      vehicleKind: '카니발',
      vehicleDate: '2024년 01월 11일',
      vehicleTime: '11시',
      vehicleReturnDate: '2024년 01월 12일',
      vehicleReturnTime: '11시',
      employeeName: '로디',
      mileage: 300,
      amountOil: 99.3,
      returnStatus: false
    },
  ];
  const [selectedVehicle, setSelectedVehicle] = useState();

  const handleDropdownSelect = (vehicleNumber) => {
    if (vehicleNumber === 'all') {
      setSelectedVehicle(null);
    } else {
      const selected = vehicles.find((vehicle) => vehicle.vehicleNumber === vehicleNumber);
      setSelectedVehicle(selected);
    }
  };

  return (
    <div className="VehicleStatus">
      <h1>차량현황</h1>
      <div style={{display: 'flex',justifyContent: 'space-between', marginBottom: '5px'}}>
        <DropdownButton id="dropdown-basic-button" title="차량선택" onSelect={handleDropdownSelect}>
          <Dropdown.Item key="all" eventKey="all">
            전체
          </Dropdown.Item>
          {vehicles.map(vehicle => (
            <Dropdown.Item key={vehicle.id} eventKey={vehicle.vehicleNumber}>
              {vehicle.vehicleNumber}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      <Button variant="primary" onClick='' style={{ marginLeft: '5px' }}>
        엑셀다운
      </Button>
      </div>
      <Table striped>
        <thead>
        <tr>
          <th>차량번호</th>
          <th>차종</th>
          <th>대여일</th>
          <th>대여시간</th>
          <th>반납일</th>
          <th>반납시간</th>
          <th>대여자</th>
          <th>주행거리</th>
          <th>유류량</th>
          <th>반납여부</th>
        </tr>
        </thead>
        <tbody>
          {selectedVehicle
            ? <Vehicle key={selectedVehicle.id} vehicle={selectedVehicle} />
            : vehicles.map((vehicle) => <Vehicle key={vehicle.id} vehicle={vehicle} />)
          }
      </tbody>
      </Table>
    </div>
  );
}

export default VehicleStatus;
