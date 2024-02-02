import { AnswerBase } from './answer-base';

export class TextboxAnswer extends AnswerBase<string> {
  override controlType = 'textbox';
}
