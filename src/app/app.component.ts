import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// element component is defined in the server-element
// here we have a list of elements
  serverElements = [{type: 'server', name: 'test server', content: 'This is just a test'}];

// these will run after the blue print or server is added in cockpit

  onServerAdded(serverData:{name:string,content:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(bluePrintData:{name:string ,content:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.name,
      content: bluePrintData.content
    });
  }
}
