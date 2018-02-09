import {
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatIconModule,
  MatAutocompleteModule
} from "@angular/material";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  declarations: []
})
export class CustomMaterialModule {}
