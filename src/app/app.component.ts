import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export interface AngularBooks {
  name: string;
  position: number;
  Author: string;
  Country: string;
}

const ELEMENT_DATA: AngularBooks[] = [
  {position: 1, name: 'Angular1', Author: 'ROBERT', Country: 'SWISS'},
  {position: 2, name: 'Angular1', Author: 'ROBERT', Country: 'SWISS'},
  {position: 3, name: 'Angular1', Author: 'ROBERT', Country: 'SWISS'},
  {position: 4, name: 'Angular1', Author: 'ROBERT', Country: 'SWISS'},
  {position: 5, name: 'Angular1', Author: 'ROBERT', Country: 'SWISS'},
  {position: 6, name: 'Angular1', Author: 'ROBERT', Country: 'SWISS'},
  {position: 7, name: 'Angular1', Author: 'ROBERT', Country: 'SWISS'},
  {position: 8, name: 'Angular1', Author: 'ROBERT', Country: 'SWISS'},
  {position: 9, name: 'Angular1', Author: 'ROBERT', Country: 'SWISS'},
  {position: 10, name: 'Angular1', Author: 'ROBERT', Country: 'SWISS'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Material';
  public firstFormGroup!: FormGroup;
  public secondFormGroup!: FormGroup;
  isEditable = false;
  opened=false;      /*its reuired other than toggle */
  // hidden!: boolean;
  // toggleBadgeVisibility() {
  //   this.hidden = !this.hidden;
  // }
  // notifications=3;

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-Author', 'demo-Country'];
  dataSource = ELEMENT_DATA;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

}




