import {
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatIconModule
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
    MatIconModule
  ],
  declarations: []
})
export class CustomMaterialModule {}
