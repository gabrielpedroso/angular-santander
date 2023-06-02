import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { CustomRescueComponent } from "./pages/custom-rescue/custom-rescue.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'resgate-personalizado', component: CustomRescueComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
