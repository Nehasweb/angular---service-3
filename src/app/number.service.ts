import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{
  GetCountCapital(): any {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  GetChkPrime()
   {
    if ((11 % 2) == 0)
   {
     return true;
   } 
   else
   {
    return false ;
   }
  }
}
