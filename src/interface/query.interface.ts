export default interface UserQuery {
  name: string;
  email: string;
  query: string;
  message: string;
}

export interface CVRequest {
  name: string;
  contact: string;
  pincode: string;
  email: string;
  file?: any;
}
