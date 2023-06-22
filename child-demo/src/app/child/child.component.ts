import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges, OnInit {
  @Input('loggedIn') loggedIn!: boolean;

  // private _loggedIn: boolean = false;
  message: string = '';
  name = 'kobe';

  constructor() {}
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    const loggedInValue = changes['loggedIn'];
    if (loggedInValue.currentValue === true) {
      this.message = 'Welcome Back kobe';
    } else {
      this.message = 'Please login';
    }
  }

  greetKobe() {
    alert('Hey kobe');
  }

  // get loggedIn(): boolean {
  //   return this._loggedIn;
  // }

  // @Input()
  // set loggedIn(value: boolean) {
  //   this._loggedIn = value;
  //   if (value === true) {
  //     this.message = 'Welcome Back Kobe';
  //   } else {
  //     this.message = 'Please login';
  //   }
  // }
}
