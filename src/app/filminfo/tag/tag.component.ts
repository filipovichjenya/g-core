import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { filter, tap, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';


@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit, OnDestroy {

  subscription;
  tags;
  @Input() id: number;

  constructor(private dataService: DataService) {
    this.tags = new Set();
  }



  createTag(event: Event, value: string) {
    event.preventDefault();
    this.dataService.setTagById(this.id, value);
  }

  ngOnInit() {
    const $tags = this.dataService.getTags().pipe(
      switchMap(item => from(Object.entries(item))),
      filter((item: any) => item[1].includes(this.id))
    )
    this.subscription = $tags.subscribe(tag => {
      return this.tags.add(tag[0])
    })
  }
  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

}
