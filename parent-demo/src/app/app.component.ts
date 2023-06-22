import { Component } from '@angular/core';
import { InteractionService } from './_shared/interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _interactionService: InteractionService) {}

  greet(name: string) {
    alert('hello ' + name);
  }

  greetStudent() {
    this._interactionService.sendMessage('Good Morning');
  }
  appreciateStudent() {
    this._interactionService.sendMessage('Well done!');
  }
}
