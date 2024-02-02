import { Question } from './question';

export class SurveyDto {
  id!: number;
  title!: string;
  questions!: Question[];
  creator!: string;
}
