import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { filter, tap, switchMap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';


@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit, OnDestroy {

  subscription;
  tags;
  @Input() id: number;

  constructor(private dataService: DataService) { }





  createTag(event: Event, value: string) {
    event.preventDefault();
    this.dataService.setTagById(this.id, value);
  }

  ngOnInit() {
    const $tags = this.dataService.getTags().pipe(
      switchMap(item => from(item)),
      filter((item: any) => item.IDs.includes(this.id))
    )
    this.subscription = $tags.subscribe(tag => this.tags = tag)
  }
  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

}
