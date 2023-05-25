
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public sharedData = [];
  
  private index;
  
  get_index()
  {
    return this.index;
  }
  set_index(ind)
  {
    this.index = ind;
    
  }
  update_data(update_name,update_id)
  {
    
    this.sharedData[this.index]['name'] = update_name;
    this.sharedData[this.index]['id'] = update_id;
   
  }

  remove_data(user)
  {
    let index = this.sharedData.indexOf(user);
    this.sharedData.splice(index,1);
    if(this.route.url!=='/candidate-list')
    {
      this.route.navigateByUrl('/candidate-list');
    }
    
  }
  constructor(private route:Router ) { }
}
