import { Component, OnInit, Input, OnChanges, SimpleChanges, Pipe } from '@angular/core';


@Pipe({
  name:"shuffle"
})

export class ShufflePipe{
  transform(value: any[], fallback: any[]): any[]{
    let tmp = [];
    if(value){
      tmp = this.randomizeArray(this.generateRandomNums(value.length), value);
    }
    else{
      tmp = fallback;
    }
    return tmp;
  }

  generateRandomNums(length: number): any[]{

    let visitedIndexes: number[] = [];

    let val: number;
     for(let i = 0; i < length; i++){
       do{
         val = Math.floor(Math.random() * length + 1);
       }
       while(visitedIndexes.indexOf(val) > -1);
       visitedIndexes[i] = val;
     }
     return visitedIndexes
  }

  randomizeArray(randNums: any[], inputArray: any[]): any[]{
    let outputArray: any[] = [];
    for(let i = 0; i < randNums.length; i++){
      outputArray[i] = inputArray[i];
    }
    return outputArray;
  }


}
