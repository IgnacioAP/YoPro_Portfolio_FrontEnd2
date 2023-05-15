import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  
  copyEmailToClipboard(id:any){
    const input=document.getElementById(id) as HTMLInputElement
    if(input){
      input.select();
      input.setSelectionRange(0, 99999);
      document.execCommand("copy");
      input.setSelectionRange(0, 0);
      input.blur();
    }
    
  }
}
