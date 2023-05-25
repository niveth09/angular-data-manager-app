
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './../data.service';


@Component({
  selector: 'app-edit-candidate-details',
  templateUrl: './edit-candidate-details.component.html',
  styleUrls: ['./edit-candidate-details.component.css']
})
export class EditCandidateDetailsComponent implements OnInit {
 
  candidateModel = {
    name:this.data.sharedData[this.data.get_index()]['name'],
    id : this.data.sharedData[this.data.get_index()]['id']
  };
  send_update(update_name,update_id)
  {
    this.data.update_data(update_name,update_id);
  }
  
  constructor(public data:DataService) { }

  ngOnInit(): void {
  }

}
