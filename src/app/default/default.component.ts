import { Component} from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent{

  data: any[];
    constructor() {
        this.data = [{
               name:'Prashobh',
               country:'India'
             },
             {
              name:'Abraham',
              country:'US'
             },
             {
              name:'Jhon',
              country:'China'
             }
         ]
  
	}
}