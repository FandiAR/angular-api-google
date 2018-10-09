import { Component, OnInit } from "@angular/core";
import { PersonService } from "../../services/person.service";

@Component({
  selector: "app-slank",
  templateUrl: "slank.component.html",
  providers: [PersonService]
})
export class SlankComponent implements OnInit {
  data: any = [];
  link: string;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.getPerson();
  }

  getPerson() {
    this.personService.getPerson("slank").subscribe(res => {
      // this.data = res;
      console.log(
        "XXX test",
        res.itemListElement[0].result.detailedDescription.url,
        res.itemListElement[0].result.url
      );
      const url = [
        {
          id: 1,
          title: "Wikipedia - Slank",
          link: res.itemListElement[0].result.detailedDescription.url
        },
        {
          id: 2,
          title: "Website - Slank",
          link: res.itemListElement[0].result.url
        }
      ];
      this.data = url;
    });
  }

  loadFrame(person) {
    this.link = person.link;
  }
}
