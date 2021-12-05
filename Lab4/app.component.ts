import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    template: `
                <label>Введите строку для вывода в обратном порядке</label>
                <input [(ngModel)]="row" placeholder="">
                <h1>{{row.split("").reverse().join("")}}</h1>
              `
})
export class AppComponent { 
    name= '';
}
