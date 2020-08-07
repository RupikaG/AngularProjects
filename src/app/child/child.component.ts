import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>
    <h3>This is Child Component Input - {{uname}}</h3>
    </div>
    <div>
    <h3>This is Child Component Output</h3>
    <button (click)="passData()">Send Data back to parent</button>
    </div>
  `,
  styles: [`
  background:lightgray;
  padding:20px;
  `
  ]
})
export class ChildComponent implements OnInit {
  @Input()
  uname:string;
  
  @Output()
  notify:EventEmitter<string>= new EventEmitter<string>();
  passData(){
    this.notify.emit("This message is from child component");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
