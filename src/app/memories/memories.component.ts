import { Component, OnInit } from '@angular/core';
import { Memory } from '../memory';
import { MemoryService } from '../memory.service';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.css']
})
export class MemoriesComponent implements OnInit {

  memories: Array<Memory> = new Array<Memory>();
  selectedMemory: Memory

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
