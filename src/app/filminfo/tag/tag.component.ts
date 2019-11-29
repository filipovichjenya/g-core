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

  constructor(private dataService: DataService) {
    this.tags = [];
   }





  createTag(event: Event, value: string) {
    event.preventDefault();
    this.dataService.setTagById(this.id, value);
  }

  ngOnInit() {
    const $tags = this.dataService.getTags().pipe(
      switchMap(item => from(item)),      
      filter((item: any) => item.IDs.includes(this.id)),
      tap(el => console.log(el))
    )
    this.subscription = $tags.subscribe(tag =>{
      console.log(this.tags)
      return this.tags.push(tag)
    } )
  }
  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

}
