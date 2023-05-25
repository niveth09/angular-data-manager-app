import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {

  constructor(private data:DataService) { }
  submit(form)
  {
  console.log(form)
    this.data.sharedData.push({name:form.name,id:form.id});
  }
  
  ngOnInit(): void {
  }

}
