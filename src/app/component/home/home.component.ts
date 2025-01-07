import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
inputValue: string = '';
numberValue: number = 0;
passwordValue: string = '';
emailValue: string = '';
dateValue: string = '';
selectedCheckboxes: string[] = []; // Array to hold selected checkboxes
selectedOption: string = '';
rangeValue: number = 50;

// Array of checkbox options
checkboxOptions: string[] = ['Option A', 'Option B', 'Option C', 'Option D'];

onCheckboxChange(event: Event, option: string): void {
  const checkbox = event.target as HTMLInputElement;
  if (checkbox.checked) {
    this.selectedCheckboxes.push(option);
  } else {
    const index = this.selectedCheckboxes.indexOf(option);
    if (index > -1) {
      this.selectedCheckboxes.splice(index, 1);
    }
  }
}

displayValues(): void {
  const formData = {
    text: this.inputValue,
    number: this.numberValue,
    password: this.passwordValue,
    email: this.emailValue,
    date: this.dateValue,
    selectedCheckboxes: this.selectedCheckboxes,
    selectedRadio: this.selectedOption,
    range: this.rangeValue
  };
  console.log('Form Data:', formData);
}

}
