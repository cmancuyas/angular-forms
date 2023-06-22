import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InteractionService } from '../_shared/interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit{
  // @Output() greetEvent = new EventEmitter();

  // name = 'Kobe Mancuyas';

  // callParentGreet() {
  //   this.greetEvent.emit(this.name);
  // }

  constructor(private _interactionService: InteractionService){}
  ngOnInit(): void {
    this._interactionService.teacherMessage$
    .subscribe(
      message => {
        if(message === 'Good Morning'){
          alert('Good morning teacher!')
        }else{
          alert('Thank you teacher!')
        }
      }
    )
  }


}
