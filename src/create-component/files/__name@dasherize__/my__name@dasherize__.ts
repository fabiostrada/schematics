import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'my-<%= dasherize(name) %>-component',
	templateUrl: './<%= dasherize(name) %>.component.html',
	styleUrls: ['./<%= dasherize(name) %>.component.scss'],
})
export class My<%= classify(name) %>Component implements OnInit {
	
    constructor() { }
	
    ngOnInit(): void {
    }
    
}