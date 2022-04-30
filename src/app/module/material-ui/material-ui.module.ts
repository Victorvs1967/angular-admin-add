import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

const MATERIAL_UI_COMPONENTS = [
  MatIconModule,
];

@NgModule({
  imports: [ CommonModule, ...MATERIAL_UI_COMPONENTS ],
  exports: [ ...MATERIAL_UI_COMPONENTS ]
})
export class MaterialUiModule { }
