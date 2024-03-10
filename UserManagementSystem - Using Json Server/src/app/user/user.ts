export interface User {
    id?: string; // Optional ID field for new users
    firstName: string;
    lastName: string;
    address?: string;
    email: string;
    phone: string;
  }