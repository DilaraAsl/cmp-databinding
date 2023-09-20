import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName = '';
  newServerContent = '';
  // @Output() we are passing value out of the component -can assign alias if needed
  @Output() serverCreated=new EventEmitter<{name:string, content:string}>;
  @Output() bluePrintCreated=new EventEmitter<{name:string, content:string}>;
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    //pass the values to EventEmitter instance serverCreated
  this.serverCreated.emit({name:this.newServerName,
  content:this.newServerContent});
  }

  onAddBlueprint() {
    //pass the values to EventEmitter instance bluePrintCreated
 this.bluePrintCreated.emit({name:this.newServerName,content:this.newServerContent})
  }

}
