import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { PersonService } from "../../services/person.service";
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: "app-iwan-fals",
  templateUrl: "iwan-fals.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IwanFalsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  data: any = [];
  link: string;

  constructor(private personService: PersonService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.getPerson();
  }

  getPerson() {
    this.personService.getPerson("iwan fals").pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.cdr.markForCheck();
      // this.data = res;
      const url = [
        {
          id: 1,
          title: "Wikipedia - Iwan Fals",
          link: res.itemListElement[0].result.detailedDescription.url
        },
        {
          id: 2,
          title: "Website - Iwan Fals",
          link: res.itemListElement[0].result.url
        }
      ];
      this.data = url;
    });
  }

  loadFrame(person) {
    this.link = person.link;
    this.cdr.markForCheck();
  }
}
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
