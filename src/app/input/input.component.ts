import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
  <input #inputValue [value]="title"              
>
<button (click)="changeTitle(inputValue.value)">
Save
</button>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
@Output() submit: EventEmitter<string> = new EventEmitter();
title: string ="ngGirls";
  constructor() { 
    
  }

  ngOnInit() {
  }
  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}
