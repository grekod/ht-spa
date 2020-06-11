import { Component, OnInit, Input } from '@angular/core';
import { MemoryService } from '../memory.service';
import { Location, ɵBrowserPlatformLocation } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Memory } from '../memory';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-memory-detail-edit',
  templateUrl: './memory-detail-edit.component.html',
  styleUrls: ['./memory-detail-edit.component.css']
})
export class MemoryDetailEditComponent implements OnInit {

  @Input() memory: any
  sendable: Memory = new Memory();


  constructor(
    private route: ActivatedRoute,
    private memoryService: MemoryService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getMemory();
  }

  goBack(): void {
    this.location.back();
  }

  getMemory():void{
    const id = +this.route.snapshot.paramMap.get('Id');
    if(id){
      this.memoryService.GetById(id)
      .subscribe(
      data => this.memory = data
      );
    }else{
      this.memory = new Memory()
    }
    
  }

  /*
    Frissíteni kell az oldalt, hogy látszódjon a változás.
    Az OnInit() a detail componentnél nem fut le ha goBack()-el megyek vissza.
    A routert nem akartam csak ezért importálni bár lehet, hogy szebb megoldás lett volna.
  */
  save(): void{
    const id = +this.route.snapshot.paramMap.get('Id');
    this.convert();
    
    if(id){
      this.memoryService.Update(id,this.sendable)
    }
    else{
      this.memoryService.Insert(this.sendable)
    }
    this.goBack()
  }
  
  /*
  Ezt a kis és nagybetű miatt raktam bele.
  Mivel a backend Nagybetűvel atribútumú Object-et vár, azt kell kapnia.
  Viszont ha itt nem any-t használok a megjelenítésre, hanem Memory class-t,
  akkor nem tudja kitölteni az input boxokat. Mivel az:
    [(ngModel)]="memory.size" --> jó
    [(ngModel)]="Memory.size" --> rossz 

  Nem ismeri fel ha az első betű nagy, akár az a változó neve, akár nem.
  Viszont ha a változó neve nagy, és kicsivel írom, akkor meg nem tudja, hogy
  arról a változóról van szó.

  Ilyenbe sajnos most futottam bele először, 
  de emiatt nem akartam átírni az egész backendet.
  
  */
  convert(){
    this.sendable.Id = this.memory.id;
    this.sendable.Manufacturer = this.memory.manufacturer;
    this.sendable.Type = this.memory.type;
    this.sendable.ImgURL = this.memory.imgURL;
    this.sendable.PurchasePrice = this.memory.purchasePrice;
    this.sendable.SellingPrice = this.memory.sellingPrice;
    this.sendable.Archived = this.memory.archived;
    this.sendable.Socket = this.memory.socket;
    this.sendable.MemorySize = this.memory.memorySize;
    this.sendable.Size = this.memory.size;
    this.sendable.Latency = this.memory.latency;
  }

}
