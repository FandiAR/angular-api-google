import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TomCruiseComponent } from "./tom-cruise.component";
import { TaylorSwiftComponent } from "./taylor-swift.component";
import { ArnoldComponent } from "./arnold.component";
import { IwanFalsComponent } from "./iwan-fals.component";
import { SlankComponent } from "./slank.component";
import { AhmadDhaniComponent } from "./ahmad-dhani.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Person"
    },
    children: [
      {
        path: "tom-cruise",
        component: TomCruiseComponent,
        data: {
          title: "Tom Cruise"
        }
      },
      {
        path: "taylor-swift",
        component: TaylorSwiftComponent,
        data: {
          title: "Taylor Swift"
        }
      },
      {
        path: "arnold",
        component: ArnoldComponent,
        data: {
          title: "Arnold Schwarzenegger"
        }
      },
      {
        path: "iwan-fals",
        component: IwanFalsComponent,
        data: {
          title: "Iwan Fals"
        }
      },
      {
        path: "slank",
        component: SlankComponent,
        data: {
          title: "Slank"
        }
      },
      {
        path: 'ahmad-dhani',
        component: AhmadDhaniComponent,
        data: {
          title: 'Ahmad Dhani'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule {}
