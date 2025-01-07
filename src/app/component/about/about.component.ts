import { Component,Input  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private router: Router) { } // Import Router from '@angular/router'

  @Input() name!: string;
  @Input() age!: number;  // Declare the prop with @Input decorator

  @Input() person!: any;

  handleClickEvent(){
    this.router.navigate(['/home']);
  }

}
