import React from "react";
import { Apartment } from "../types/Types";
import { useLocation } from "react-router-dom";
import "./ApartmentDetails.scss";
import Carousel from "./Carousel.tsx";
import ColorThemeSelector from "./ColorThemeSelector.tsx";

const ApartmentDetails: React.FC = () => {
  const location = useLocation();
  const apartment = location.state?.apartment as Apartment;

  if (!apartment) return <p>No data available</p>;

  const roomImages = [
    "https://imagecdn.99acres.com/media1/26167/12/523352403M-1728375697341.jpg",
    "https://imagecdn.99acres.com/media1/26167/12/523352395M-1728375702481.jpg",
    "https://imagecdn.99acres.com/media1/26167/12/523352403M-1728375697341.jpg",
    "https://imagecdn.99acres.com/media1/26167/12/523352395M-1728375702481.jpg",
  ];

  return (
    <div className="apartment-details">
      <div className="apartment_name">{apartment.apartmentName}</div>
      <div className="location">Location: {apartment.location}</div>
      <div className="total-rooms">Number of Floors: {apartment.floors.length}</div>
      <div className="floors-rooms">Floors and Rooms:</div>
      {apartment.floors.map((floor, floorIndex) => (
        <div key={`floor-${floorIndex}`}>
          <h4>Floor {floorIndex + 1}:</h4>
          <div className="apartment-details__room-large">
            {floor.rooms.map((room, roomIndex) => (
              <div
                key={`room-${roomIndex}`}
                className="apartment-details__room"
              >
                <div className="carousel-division">
                  <Carousel images={roomImages} />
                </div>
                <div className="rooms-division">
                  <h5>{room.roomName || `Room ${roomIndex + 1}`}</h5>
                  <p>
                    <strong>Beds:</strong> {room.beds}
                  </p>
                  <p>
                    <strong>Washrooms:</strong> {room.washrooms}
                  </p>
                  <h3>Rent Details:</h3>
                  <p>
                    <strong>Monthly Rent:</strong> {room.monthlyRent}
                  </p>
                  <p>
                    <strong>Security Deposit:</strong> {room.securityDeposit}
                  </p>
                  <p>
                    <strong>Notice Period (In Months):</strong> {room.noticePeriod}
                  </p>
                  <p>
                    <strong>Electricity Charges:</strong> {room.electricityCharges}
                  </p>
                  <p>
                    <strong>Maintenance Charges:</strong> {room.maintenance}
                  </p>
                  <div className="single-room-feature-division">
                    <strong>Features:</strong>
                    <ul>
                      {room.features.almirah && <li>Almirah</li>}
                      {room.features.ac && <li>AC</li>}
                      {room.features.balcony && <li>Balcony</li>}
                      {room.features.table && <li>Table</li>}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <h3>Facilities:</h3>
      <ul>
        {apartment.facilities.parking && <li>Parking</li>}
        {apartment.facilities.internet && <li>Internet</li>}
        {apartment.facilities.lift && <li>Lift</li>}
        {apartment.facilities.powerBackup && <li>Power Backup</li>}
      </ul>
        <ColorThemeSelector />
    </div>
  );
};

export default ApartmentDetails;
