import {Component, Input, Output} from '@angular/core';

@Component({
    selector: 'child',
    template: `
	<h1>The tilte is {{tittle}}</h1>
			
})

export class ChildComponent {

        @Input() 
    title:string;
    
}