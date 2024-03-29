import { Languages, LearningLanguages } from './create-user.dto';

export interface IUserInterface {
  id: string;
  name: string;
  surname: string;
  email: string;
  description?: string;
  gender?: string;
  age?: number;
  country?: string;
  nativeLanguages: Languages[];
  learningLanguages: LearningLanguages[];
}
export class UserDto implements IUserInterface {
  id: string;
  name: string;
  surname: string;
  email: string;
  age: number;
  description?: string;
  gender?: string;
  country?: string;
  nativeLanguages: Languages[];
  learningLanguages: LearningLanguages[];

  constructor(props: any) {
    this.id = props.id;
    this.name = props.name;
    this.surname = props.surname;
    this.email = props.email;
    this.age = props?.age;
    this.description = props?.description;
    this.gender = props?.gender;
    this.country = props?.country;
    this.nativeLanguages = props?.nativeLanguages;
    this.learningLanguages = props?.learningLanguages;
  }
}
