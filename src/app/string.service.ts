import { Injectable } from '@angular/core';
import { count } from 'console';


@Injectable({
  providedIn: 'root'
})
export class StringService 
{

  constructor() { }

  GetCountCapital( )
  {
    var str = " Neha ";

    console.log(
      (str.match(/[A-Z]/g) || '').length
    )
    {
      return count ;
    }
  }
}
