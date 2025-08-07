import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent { 

    constructor(
        private router: Router
    ) { }

    onReadClick() {
        this.router.navigateByUrl('/home');
    }

    onWriteClick() {
        console.log('tst'); 
        this.router.navigateByUrl('/write');
    }
}