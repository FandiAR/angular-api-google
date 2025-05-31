import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { PersonService } from "../../services/person.service";
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: "app-ahmad-dhani",
  templateUrl: "ahmad-dhani.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AhmadDhaniComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  data: any = [];
  link: string;

  constructor(private personService: PersonService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.getPerson();
  }

  getPerson() {
    this.personService.getPerson("ahmad dhani").pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.cdr.markForCheck();
      // this.data = res;
      const url = [
        {
          id: 1,
          title: "Wikipedia - Ahmad Dhani",
          link: res.itemListElement[0].result.detailedDescription.url
        },
        {
          id: 2,
          title: "Website - Ahmad Dhani",
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
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
