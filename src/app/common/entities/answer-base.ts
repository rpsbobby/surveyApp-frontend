export class AnswerBase<T> {
  required: boolean = true;
  controlType: string | undefined;
  id: number;
  surveyId: number;
  question: string;
  answer: string;

  constructor(
    options: {
      value?: T;
      id?: number;
      surveyId?: number;
      question?: string;
    } = {}
  ) {
    this.id = options.id || -1;
    this.question = options.question || '';
    this.surveyId = options.surveyId || -1;
    this.answer = '';
  }
}
// {
//   "id": 4,
//   "title": "Title",
//   "questions": [
//       {
//           "id": 3,
//           "survey_id": 4,
//           "question": "Test 1",
//           "answers": []
//       },
//       {
//           "id": 4,
//           "survey_id": 4,
//           "question": "Test 2",
//           "answers": [
//               {
//                   "answer": "Im good",
//                   "id": 1,
//                   "questionId": 4
//               },
//               {
//                   "answer": "Im very well, thank you",
//                   "id": 2,
//                   "questionId": 4
//               }
//           ]
//       }
//   ],
//   "creator": "test"
// }
