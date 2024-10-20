export type RoomFeatures = {
  almirah: boolean;
  ac: boolean;
  balcony: boolean;
  table: boolean;
};

export type RentDetails = {

};

export type Room = {
  roomName: string;
  beds: number;
  washrooms: number;
  features: RoomFeatures;
  monthlyRent: number;
  securityDeposit: number;
  noticePeriod: number;
  electricityCharges:number;
  maintenance: number;
};

export type Floor = {
  rooms: Room[];
};

export type Facilities = {
  parking: boolean;
  internet: boolean;
  lift: boolean;
  powerBackup: boolean;
};

export type Apartment = {
  apartmentName: string;
  location: string;
  floors: Floor[];
  facilities: Facilities;
  availability: "available" | "not available";
};
