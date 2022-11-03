import { personDetail } from './personDetail';

export class People {
  id: number;
  code: string;
  fullName: string;
  identification: string;
  email: string;
  phone: string;
  personDetail: personDetail;
  constructor() {}
}
