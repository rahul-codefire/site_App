    import { Component } from '@angular/core';
    @Component({
      selector: 'my-app',
      template: `      
        <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
		  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>
		  <a class="navbar-brand" routerLink="/">Navbar</a>

		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
			  <li class="nav-item active">
				<a class="nav-link" routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" routerLink="/default">default</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" routerLink="/slider" >slider</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" routerLink="/header" >header</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" routerLink="/heroes" >heroes</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" routerLink="/tabeldata" >tabeldata</a>
			  </li>
			</ul>			
		  </div>
		</nav>		
        <router-outlet></router-outlet>
      `
    })
    export class AppComponent {
     
	   
  
	}