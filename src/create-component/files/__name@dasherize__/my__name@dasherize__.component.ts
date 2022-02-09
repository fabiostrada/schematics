import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: '<%= dasherize(name) %>-component',
	templateUrl: './<%= dasherize(name) %>.component.html',
	styleUrls: ['./<%= dasherize(name) %>.component.scss'],
})
export class My<%= classify(name) %>Component implements OnInit, OnDestroy {
	
    protected unsubscribeAll: Subject<any> = new Subject();

    constructor() { }
	
    ngOnInit(): void {
        console.log('ngOnInit');
    }
    
    ngOnDestroy(): void {
        this.unsubscribeAll.next(0);
        this.unsubscribeAll.complete();
    }
}