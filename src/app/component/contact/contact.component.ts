import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  parentName = 'Jane Doe';
  parentAge = 30;

  // parent.component.ts
 person = { name: 'Alice', age: 28 };

}
