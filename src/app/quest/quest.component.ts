import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

  questions;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.questions = this.dataService.getQuest();
  }

}
