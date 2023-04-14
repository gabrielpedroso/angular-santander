import { NgModule } from "@angular/core";

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from "@angular/material/form-field";

const materialModules = [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
];

@NgModule({
    imports: materialModules,
    exports: materialModules,
})
export class AppMaterialModule { }
