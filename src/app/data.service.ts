import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  questions = [
    {
      q: 'question 1',
      a: ['answer 1', 'answer 2', 'answer 3']
    },
    {
      q: 'question 2',
      a: ['answer 1', 'answer 2', 'answer 3']
    },

  ];

  constructor() { }

  getQuest() {
    return this.questions;
  }

}
