import { NgModule } from "@angular/core";

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button'

const materialModules = [
    MatTableModule,
    MatButtonModule,
];

@NgModule({
    imports: materialModules,
    exports: materialModules,
})
export class AppMaterialModule { }
