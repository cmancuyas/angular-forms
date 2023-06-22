import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  pageTitle = 'Angular Component Interaction';
  imgUrl = 'https://picsum.photos/200';
  count = 0;
  name: string = '';
  userName: string = '';
  private _customerName: string = '';
  @ViewChild('nameRef') nameElementRef!: ElementRef;

  ngAfterViewInit(): void {
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }

  incrementCount() {
    this.count += 1;
  }
  decrementCount() {
    this.count -= 1;
  }

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
    if (value === 'kobe') {
      alert('hello kobe');
    }
  }

  greetKobe(updatedValue: any) {
    this.userName = updatedValue;
    if (updatedValue === 'kobe') {
      alert('Welcome back Kobe');
    }
  }
}
