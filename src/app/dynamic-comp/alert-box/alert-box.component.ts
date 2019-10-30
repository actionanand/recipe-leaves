import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent implements OnInit {

  message: string;
  close = new Subject;

  constructor() { }

  ngOnInit() {
  }

  onClose(){
    this.close.next();
  }

}
