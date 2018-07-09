import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDonneesComponent } from './list-donnees/list-donnees.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListDonneesComponent],
  exports: [ListDonneesComponent]
})
export class ListDonneesModule { }
