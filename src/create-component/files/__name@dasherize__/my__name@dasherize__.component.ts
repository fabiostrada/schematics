import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
	selector: '<%= dasherize(name) %>-component',
	templateUrl: './<%= dasherize(name) %>.component.html',
	styleUrls: ['./<%= dasherize(name) %>.component.scss'],
})
export class My<%= classify(name) %>Component implements OnInit, OnDestroy {
	
    constructor() { }
	
    ngOnInit(): void {
    }
    
    ngOnDestroy(): void {
        
    }
}