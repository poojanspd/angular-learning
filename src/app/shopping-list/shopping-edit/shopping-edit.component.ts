import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput')nameInput: ElementRef;
  @ViewChild('amountInput')amountInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName=this.nameInput.nativeElement.value;
    const ingAmount=this.amountInput.nativeElement.value;
    const ingredient = new Ingredient(ingName,ingAmount);
    this.ingredientAdded.emit(ingredient);
  }
}
