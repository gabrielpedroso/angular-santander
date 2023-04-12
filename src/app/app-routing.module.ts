import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { InvestmentListComponent } from "./components/investment-list/investment-list.component";

const routes: Routes = [
    { path: '', component: InvestmentListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
