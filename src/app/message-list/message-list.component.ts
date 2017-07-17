import { Component, OnInit, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
