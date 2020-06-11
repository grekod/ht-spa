import { Component, OnInit } from '@angular/core';
import { MemoryService } from '../memory.service';
import { Location, ɵBrowserPlatformLocation } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Memory } from '../memory';

@Component({
  selector: 'app-memory-detail',
  templateUrl: './memory-detail.component.html',
  styleUrls: ['./memory-detail.component.css']
})
export class MemoryDetailComponent implements OnInit {

  memo: any;

  constructor(
    private route: ActivatedRoute,
    private memoryService: MemoryService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getMemory();
  }

  getMemory():void{
    const id = +this.route.snapshot.paramMap.get('Id');
    this.memoryService.GetById(id)
    .subscribe(
      data => this.memo = data
    );
  }

  Archive():void{
    this.memoryService.Archive(this.memo.id)
  }

  Delete():void{
    this.memoryService.Delete(this.memo.id)
    this.goBack()
  }

  goBack(): void {
    this.location.back();
  }
}
