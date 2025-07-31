import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
    selector: 'clickable',
    templateUrl: './clickable.component.html'
})
export class ClickableComponent {
    message = 'Click!'; 
    constructor(private api: ApiService){}

    onClick() {
        this.api.get<{data: string}>('').subscribe({
            next: result => {
                console.log(result); 
                const {data} = result;
                console.log(data); 
                this.message = data;
            },
            error: res => console.error('Error', res)
        }); 
    }
}
