import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// person component
import { TomCruiseComponent } from "./tom-cruise.component";
import { TaylorSwiftComponent } from "./taylor-swift.component";
import { ArnoldComponent } from "./arnold.component";
import { IwanFalsComponent } from "./iwan-fals.component";
import { SlankComponent } from "./slank.component";
import { AhmadDhaniComponent } from './ahmad-dhani.component';

//safe pipe
import { SafePipe } from "../../directives/safe.pipe";

// drop down
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

// person routing module
import { PersonRoutingModule } from "./person-routing.module";

@NgModule({
  imports: [CommonModule, PersonRoutingModule, BsDropdownModule.forRoot()],
  declarations: [
    SafePipe,
    TomCruiseComponent,
    TaylorSwiftComponent,
    ArnoldComponent,
    IwanFalsComponent,
    SlankComponent,
    AhmadDhaniComponent
  ]
})
export class PersonModule {}
