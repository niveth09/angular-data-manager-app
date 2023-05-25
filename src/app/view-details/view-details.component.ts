import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from './../data.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  id;
  userid;
  
  constructor(private route:ActivatedRoute,public data:DataService, private router:Router) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {

      this.id = this.data.sharedData[+params.get('id')-1];
      this.userid  = parseInt(this.route.snapshot.paramMap.get('id'));
    });
    
  }

  checkPrevious()
  {
    
    if((this.userid)-1==0)
    {
      return true;
    }
    return false;
  }

  checkNext()
  {
    if((this.userid)===(this.data.sharedData.length))
    {
      return true;
    }
    return false;
  }

  previous()
  {
    let previousId = this.userid - 1;
    this.router.navigate(['/candidate-details',previousId]);
  }

  next()
  {
    let nextId = this.userid + 1;
    
    this.router.navigate(['/candidate-details',nextId]);
  }

  
}


