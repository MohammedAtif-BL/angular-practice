import { Component } from '@angular/core';
import { UserserviceService } from 'src/app/service/userservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  users: any[] = [];

  constructor(private userService: UserserviceService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(data);
      
    });
  }

  handleSubmit() {
    const newUser = {
      name:"Sample",
      department:"asdasd",
      email:"asdf",
      salary:90003534,
      gender:"Male",
      doj:"2024-01-01",
      hobbies:["Cricket","ABC","XYZ"],
           
  }
    this.userService.addUser(newUser).subscribe((response) => {
      console.log(response);
      
    });
  }
}
