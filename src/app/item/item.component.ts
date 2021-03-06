import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <p>
    {{ todoItem.title }}
    </p>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;
  constructor() { }

  ngOnInit() {
  }

}
