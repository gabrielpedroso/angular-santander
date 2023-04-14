import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { InvestmentListComponent } from "./components/investment-list/investment-list.component";
import { CustomRescueComponent } from "./components/custom-rescue/custom-rescue.component";

const routes: Routes = [
    { path: '', component: InvestmentListComponent },
    { path: 'teste', component: CustomRescueComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
