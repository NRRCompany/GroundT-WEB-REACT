import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import * as PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import VehicleInfoUpdatePopup from "./VehicleInfoUpdatePopup";
import VehicleInfoInsertPopup from "./VehicleInfoInsertPopup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Vehicle = ({ vehicle }) => {
  return (
    <tr>
      <td>
        <b>{vehicle.vehicleNumber}</b>
      </td>
      <td>{vehicle.vehicleDiv}</td>
      <td>{vehicle.vehicleKind}</td>
      <td>{vehicle.vehicleSeater}</td>
      <td>{vehicle.vehiclePurchaseDate}</td>
      <td>{vehicle.vehicleExpirationDate}</td>
      <td>{vehicle.vehicleInsuranceSubscriptionDate}</td>
      <td>{vehicle.vehicleInsuranceExpirationDate}</td>
      <td>{vehicle.vehicleInsuranceCompany}</td>
      <td>{vehicle.mileage}</td>
    </tr>
  );
};

Vehicle.propTypes = {
  vehicle: PropTypes.shape({
    id: PropTypes.number,
    vehicleNumber: PropTypes.string,
    vehicleDiv: PropTypes.string,
    vehicleKind: PropTypes.string,
    vehicleSeater: PropTypes.number,
    vehiclePurchaseDate: PropTypes.string,
    vehicleExpirationDate: PropTypes.string,
    vehicleInsuranceSubscriptionDate: PropTypes.string,
    vehicleInsuranceExpirationDate: PropTypes.string,
    vehicleInsuranceCompany: PropTypes.string,
    mileage: PropTypes.number,
  }),
};
const VehicleInfo = (props) => {

  const vehicles = [
    {
      id: 1,
      vehicleNumber: '111가1111',
      vehicleDiv: '리스',
      vehicleKind: '카니발',
      vehicleSeater: 9,
      vehiclePurchaseDate: '2020년 01월 11일',
      vehicleExpirationDate: '2024년 01월 10일',
      vehicleInsuranceSubscriptionDate: '2020년 01월 11일',
      vehicleInsuranceExpirationDate: '2060년 01월 10일',
      vehicleInsuranceCompany: '현대',
      mileage: 1111,

    },
    {
      id: 2,
      vehicleNumber: '222나2222',
      vehicleDiv: '리스',
      vehicleKind: '카니발',
      vehicleSeater: 9,
      vehiclePurchaseDate: '2020년 01월 11일',
      vehicleExpirationDate: '2024년 01월 10일',
      vehicleInsuranceSubscriptionDate: '2020년 01월 11일',
      vehicleInsuranceExpirationDate: '2060년 01월 10일',
      vehicleInsuranceCompany: 'DB',
      mileage: 1111,
    },
    {
      id: 3,
      vehicleNumber: '333다3333',
      vehicleDiv: '리스',
      vehicleKind: '카니발',
      vehicleSeater: 9,
      vehiclePurchaseDate: '2020년 01월 11일',
      vehicleExpirationDate: '2024년 01월 10일',
      vehicleInsuranceSubscriptionDate: '2020년 01월 11일',
      vehicleInsuranceExpirationDate: '2060년 01월 10일',
      vehicleInsuranceCompany: 'KB',
      mileage: 1111,
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

  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [showInsertPopup, setShowInsertPopup] = useState(false);
  const handleUpdatePopupShow = () => {
    setShowUpdatePopup(true);
  };

  const handleUpdatePopupClose = () => {
    setShowUpdatePopup(false);
  };

  const handleInsertPopupShow = () => {
    setShowInsertPopup(true);
  };

  const handleInsertPopupClose = () => {
    setShowInsertPopup(false);
  };
  return (

    <div className="VehicleInfo">
      <h1>차량정보</h1>
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
        <div style={{display: 'flex', marginBottom: '5px' }}>
        <Button variant="primary" onClick={handleUpdatePopupShow} style={{ marginLeft: '5px' }}>
          차량정보수정
        </Button>
        {showUpdatePopup && (
          <VehicleInfoUpdatePopup
            show={showUpdatePopup}
            handleClose={handleUpdatePopupClose}
          />
        )}
        {' '}
        <Button variant="primary" onClick={handleInsertPopupShow} style={{ marginLeft: '5px' }}>
          차량등록
        </Button>
        {showInsertPopup && (
          <VehicleInfoInsertPopup
            show={showInsertPopup}
            handleClose={handleInsertPopupClose}
          />
        )}
        {' '}
        <Button variant="primary" onClick={handleInsertPopupShow} style={{ marginLeft: '5px' }}>
          엑셀다운
        </Button>
        </div>
      </div>
      <Table striped>
      <thead>
      <tr>
        <th>차량번호</th>
        <th>차량구분</th>
        <th>차종</th>
        <th>인승</th>
        <th>계약일</th>
        <th>만기일</th>
        <th>보험가입일</th>
        <th>보험만료일</th>
        <th>보험회사명</th>
        <th>총 주행거리</th>
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


export default VehicleInfo;