import { Component, OnInit } from "@angular/core";
import { PersonService } from "../../services/person.service";

@Component({
  selector: "app-taylor-swift",
  templateUrl: "taylor-swift.component.html",
  providers: [PersonService]
})
export class TaylorSwiftComponent implements OnInit {
  data: any = [];
  link: string;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.getPerson();
  }

  getPerson() {
    this.personService.getPerson("taylor swift").subscribe(res => {
      // this.data = res;
      console.log(
        "XXX test",
        res.itemListElement[0].result.detailedDescription.url,
        res.itemListElement[0].result.url
      );
      const url = [
        {
          id: 1,
          title: "Wikipedia - Taylor Swift",
          link: res.itemListElement[0].result.detailedDescription.url
        },
        {
          id: 2,
          title: "Website - Taylor Swift",
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
