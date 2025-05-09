// types.ts
export interface Doctor {
    id: string;
    name: string;
    specialization: string;
    degrees: string[];
    experience: number;
    location: string;
    hospital: string;
    fees: {
      online: number;
      offline?: number;
      cashback?: number;
      noBookingFees?: boolean;
    };
    rating?: {
      value: number;
      patients: number;
    };
    availability: {
        online?: boolean;
        offline?: boolean;
        onlineInMinutes?: number;
        offlineInMinutes?: number;
    };
    avatar: string;
    badges?: string[];
  }
  