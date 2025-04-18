import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./AddApartmentForm.scss";

interface Room {
  roomName: string;
  beds: number;
  washrooms: number;
  features: {
    almirah: boolean;
    ac: boolean;
    balcony: boolean;
    table: boolean;
  };
  monthlyRent: number;
  securityDeposit: number;
  noticePeriod: number;
  electricityCharges: number;
  maintenance: number;
}

interface Facilities {
  parking: boolean;
  internet: boolean;
  lift: boolean;
  powerBackup: boolean;
}

interface Apartment {
  apartmentName: string;
  location: string;
  email: string;
  password: string;
  floors: { rooms: Room[] }[];
  facilities: Facilities;
}

const AddApartmentForm: React.FC = () => {
  const navigate = useNavigate();
  const [numFloors, setNumFloors] = useState<number>(1);
  const [floors, setFloors] = useState<{ rooms: Room[] }[]>([
    {
      rooms: [
        {
          roomName: "",
          beds: 1,
          washrooms: 1,
          features: { almirah: false, ac: false, balcony: false, table: false },
          monthlyRent: 0,
          securityDeposit: 0,
          noticePeriod: 0,
          electricityCharges: 0,
          maintenance: 0,
        },
      ],
    },
  ]);

  const { register, handleSubmit, reset } = useForm<Apartment>();

  const handleAddRoom = (floorIndex: number) => {
    const newFloors = [...floors];
    newFloors[floorIndex].rooms.push({
      roomName: "",
      beds: 1,
      washrooms: 1,
      features: { almirah: false, ac: false, balcony: false, table: false },
      monthlyRent: 0,
      securityDeposit: 0,
      noticePeriod: 0,
      electricityCharges: 0,
      maintenance: 0,
    });
    setFloors(newFloors);
  };

  const handleFloorChange = (newFloorsCount: number) => {
    const newFloors = [...floors];
    if (newFloorsCount > numFloors) {
      for (let i = numFloors; i < newFloorsCount; i++) {
        newFloors.push({
          rooms: [
            {
              roomName: "",
              beds: 1,
              washrooms: 1,
              features: {
                almirah: false,
                ac: false,
                balcony: false,
                table: false,
              },
              monthlyRent: 0,
              securityDeposit: 0,
              noticePeriod: 0,
              electricityCharges: 0,
              maintenance: 0,
            },
          ],
        });
      }
    } else {
      newFloors.splice(newFloorsCount);
    }
    setNumFloors(newFloorsCount);
    setFloors(newFloors);
  };

  const onSubmit: SubmitHandler<Apartment> = (data) => {
    const apartmentData: Apartment = {
      ...data,
      ...floors,
    };
    navigate("/apartment-details", { state: { apartment: apartmentData } });
    console.log("apartmentData", apartmentData);

    reset();
    setFloors([
      {
        rooms: [
          {
            roomName: "",
            beds: 1,
            washrooms: 1,
            features: {
              almirah: false,
              ac: false,
              balcony: false,
              table: false,
            },
            monthlyRent: 0,
            securityDeposit: 0,
            noticePeriod: 0,
            electricityCharges: 0,
            maintenance: 0,
          },
        ],
      },
    ]);
  };

  return (
    <div className="add-apartment-form">
      <h2 className="add-apartment-form__title">Add New Apartment</h2>
      <form
        className="add-apartment-form__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="add-apartment-form__field">
          <label htmlFor="email" className="add-apartment-form__label add-apartment-form__label--required">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="add-apartment-form__input"
            {...register("email", { required: true })}
          />
        </div>

        <div className="add-apartment-form__field">
          <label htmlFor="password" className="add-apartment-form__label add-apartment-form__label--required">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="add-apartment-form__input"
            {...register("password", { required: true })}
          />
        </div>

        <div className="add-apartment-form__field">
          <label htmlFor="apartmentName" className="add-apartment-form__label add-apartment-form__label--required">
            Apartment Name:
          </label>
          <input
            type="text"
            id="apartmentName"
            className="add-apartment-form__input"
            {...register("apartmentName", { required: true })}
          />
        </div>

        <div className="add-apartment-form__field">
          <label htmlFor="location" className="add-apartment-form__label add-apartment-form__label--required">
            Location:
          </label>
          <input
            type="text"
            id="location"
            className="add-apartment-form__input"
            {...register("location", { required: true })}
          />
        </div>

        <div className="add-apartment-form__field">
          <label htmlFor="numFloors" className="add-apartment-form__label">
            Number of Floors:
          </label>
          <input
            type="number"
            id="numFloors"
            min="1"
            value={numFloors}
            onChange={(e) => handleFloorChange(Number(e.target.value))}
            className="add-apartment-form__input"
          />
        </div>

        {floors.map((floor, floorIndex) => (
          <div key={floorIndex} className="add-apartment-form__floor">
            <h3 className="add-apartment-form__section-title">
              Floor {floorIndex + 1}
            </h3>

            {floor.rooms.map((room, roomIndex) => (
              <div key={roomIndex} className="add-apartment-form__room">
                <label
                  htmlFor={`rooms_${floorIndex}_${roomIndex}_roomName`}
                  className="add-apartment-form__label add-apartment-form__label--required"
                >
                  Room Name:
                </label>
                <input
                  type="text"
                  id={`rooms_${floorIndex}_${roomIndex}_roomName`}
                  className="add-apartment-form__input"
                  {...register(
                    `floors.${floorIndex}.rooms.${roomIndex}.roomName`,
                    { required: true }
                  )}
                />

                <label
                  htmlFor={`rooms_${floorIndex}_${roomIndex}_beds`}
                  className="add-apartment-form__label add-apartment-form__label--required"
                >
                  Beds:
                </label>
                <input
                  type="number"
                  id={`rooms_${floorIndex}_${roomIndex}_beds`}
                  className="add-apartment-form__input"
                  {...register(`floors.${floorIndex}.rooms.${roomIndex}.beds`, {
                    required: true,
                    min: 1,
                  })}
                  min="1"
                />

                <label
                  htmlFor={`rooms_${floorIndex}_${roomIndex}_washrooms`}
                  className="add-apartment-form__label add-apartment-form__label--required"
                >
                  Washrooms:
                </label>
                <input
                  type="number"
                  id={`rooms_${floorIndex}_${roomIndex}_washrooms`}
                  className="add-apartment-form__input"
                  {...register(
                    `floors.${floorIndex}.rooms.${roomIndex}.washrooms`,
                    { required: true, min: 0 }
                  )}
                  min="0"
                />

                <label
                  htmlFor={`rooms_${floorIndex}_${roomIndex}_monthlyRent`}
                  className="add-apartment-form__label add-apartment-form__label--required"
                >
                  Monthly Rent:
                </label>
                <input
                  type="number"
                  id={`rooms_${floorIndex}_${roomIndex}_monthlyRent`}
                  className="add-apartment-form__input"
                  {...register(
                    `floors.${floorIndex}.rooms.${roomIndex}.monthlyRent`,
                    { required: true, min: 0 }
                  )}
                  min="0"
                />

                <label
                  htmlFor={`rooms_${floorIndex}_${roomIndex}_securityDeposit`}
                  className="add-apartment-form__label add-apartment-form__label--required"
                >
                  Security Deposit:
                </label>
                <input
                  type="number"
                  id={`rooms_${floorIndex}_${roomIndex}_securityDeposit`}
                  className="add-apartment-form__input"
                  {...register(
                    `floors.${floorIndex}.rooms.${roomIndex}.securityDeposit`,
                    { required: true, min: 0 }
                  )}
                  min="0"
                />

                <div className="add-apartment-form__features">
                  <div className="add-apartment-form__feature-label">
                    Features:
                  </div>
                  <div className="add-apartment-form__feature">
                    <label
                      htmlFor={`rooms_${floorIndex}_${roomIndex}_features_almirah`}
                    >
                      Almirah:
                    </label>
                    <input
                      type="checkbox"
                      id={`rooms_${floorIndex}_${roomIndex}_features_almirah`}
                      {...register(
                        `floors.${floorIndex}.rooms.${roomIndex}.features.almirah`
                      )}
                    />
                  </div>
                  <div className="add-apartment-form__feature">
                    <label
                      htmlFor={`rooms_${floorIndex}_${roomIndex}_features_ac`}
                    >
                      AC:
                    </label>
                    <input
                      type="checkbox"
                      id={`rooms_${floorIndex}_${roomIndex}_features_ac`}
                      {...register(
                        `floors.${floorIndex}.rooms.${roomIndex}.features.ac`
                      )}
                    />
                  </div>
                  <div className="add-apartment-form__feature">
                    <label
                      htmlFor={`rooms_${floorIndex}_${roomIndex}_features_balcony`}
                    >
                      Balcony:
                    </label>
                    <input
                      type="checkbox"
                      id={`rooms_${floorIndex}_${roomIndex}_features_balcony`}
                      {...register(
                        `floors.${floorIndex}.rooms.${roomIndex}.features.balcony`
                      )}
                    />
                  </div>
                  <div className="add-apartment-form__feature">
                    <label
                      htmlFor={`rooms_${floorIndex}_${roomIndex}_features_table`}
                    >
                      Table:
                    </label>
                    <input
                      type="checkbox"
                      id={`rooms_${floorIndex}_${roomIndex}_features_table`}
                      {...register(
                        `floors.${floorIndex}.rooms.${roomIndex}.features.table`
                      )}
                    />
                  </div>
                </div>
              </div>
            ))}
            <Button text={`Add Room to Floor ${floorIndex + 1}`} onClick={() => handleAddRoom(floorIndex)} type="submit" />
          </div>
        ))}

        <div className="add-apartment-form__facilities">
          <h3 className="add-apartment-form__section-title">Facilities</h3>
          <div className="add-apartment-form__field">
            <label
              htmlFor="facilities_parking"
              className="add-apartment-form__label"
            >
              Parking:
            </label>
            <input
              type="checkbox"
              id="facilities_parking"
              {...register("facilities.parking")}
            />
          </div>
          <div className="add-apartment-form__field">
            <label
              htmlFor="facilities_internet"
              className="add-apartment-form__label"
            >
              Internet:
            </label>
            <input
              type="checkbox"
              id="facilities_internet"
              {...register("facilities.internet")}
            />
          </div>
          <div className="add-apartment-form__field">
            <label
              htmlFor="facilities_lift"
              className="add-apartment-form__label"
            >
              Lift:
            </label>
            <input
              type="checkbox"
              id="facilities_lift"
              {...register("facilities.lift")}
            />
          </div>
          <div className="add-apartment-form__field">
            <label
              htmlFor="facilities_powerBackup"
              className="add-apartment-form__label"
            >
              Power Backup:
            </label>
            <input
              type="checkbox"
              id="facilities_powerBackup"
              {...register("facilities.powerBackup")}
            />
          </div>
        </div>
        <Button text="Submit" onClick={()=>{}} type="submit"/>
      </form>
    </div>
  );
};

export default AddApartmentForm;