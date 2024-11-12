export interface BookingData {
    name: string;
    bookings: number;
  }
  
  export interface VenueStatData {
    name: string;
    value: number;
  }
  
  export interface RecentBooking {
    id: string;
    venue: {
      name: string;
      id: string;
    };
    customer: {
      name: string;
      email: string;
    };
    date: string;
    amount: number;
    status: 'pending' | 'confirmed' | 'cancelled';
  }
  
  export interface DashboardStats {
    revenue: {
      total: number;
      change: number;
    };
    bookings: {
      total: number;
      change: number;
    };
    venues: {
      total: number;
      change: number;
    };
    users: {
      total: number;
      change: number;
    };
  }