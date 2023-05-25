import { NzButtonModule } from 'ng-zorro-antd/button';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css'],
})
export class CandidateListComponent implements OnInit {
  constructor(public data: DataService) {}

  ngOnInit(): void {}
}
