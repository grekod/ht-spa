import { Component, OnInit } from '@angular/core';
import { Memory } from '../memory';
import { MemoryService } from '../memory.service';

@Component({
  selector: 'app-memories-dashboard',
  templateUrl: './memories-dashboard.component.html',
  styleUrls: ['./memories-dashboard.component.css']
})
export class MemoriesDashboardComponent implements OnInit {

  //itt az Array típusa lehetne Memory is, de az any-t biztonságosabbnak tartom.
  memories: Array<any> = new Array<any>();
  selectedMemory: Memory;
  altImg:String = "\assets\default_pic.jpg";

  constructor(
    private memoryService: MemoryService,
  ) { }

  ngOnInit(): void {
    this.getMemories();
  }

  getMemories():void{
    this.memoryService.GetAll()
    .subscribe(
      memos => this.memories = memos
    );
  }

}
