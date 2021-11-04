import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SendCodeComponent} from "./send-code/send-code.component";
import {VerifyComponent} from "./verify/verify.component";

const routes: Routes = [
  {path:"",pathMatch: "full",component:SendCodeComponent},
  {path:"verify",component:VerifyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
