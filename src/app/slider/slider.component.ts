import { Component} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent{

  img:any[];
    constructor() {
        this.img = [{
               src:'http://www.peru.travel/Portals/_default/Images/Slider/Common/quehacer.jpg',
			   title:'First slide',
			   dec: 'Searches related to how to use ng-repeat for slider in using typescript'
             },
             {
              src:'http://www.flightcentre.com.au/sites/flightcentre.com.au/files/styles/fcl_blog_slideshow/public/auckland-nature.jpg?itok=OM9mhJo2',
			  title:'First slide',
			  dec: 'Searches related to how to use ng-repeat for slider in using typescript'
             },
             {
              src:'http://www.peru.travel/Portals/_default/Images/Slider/Common/quehacer.jpg',
			  title:'First slide',
			  dec: 'Searches related to how to use ng-repeat for slider in using typescript'
             }
         ]
  
	}
}
