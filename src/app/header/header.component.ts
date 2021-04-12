import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
 
    @Output()selectedTabClick:EventEmitter<String>=new EventEmitter();
    onClickOfHeader(selectedTab: string){
            this.selectedTabClick.emit(selectedTab);
    }
}