import { Component, Input, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
 @Input()
  displayBasic: boolean = false;
  readonly dialog = inject(MatDialog);
  // openDialog(we:any,ewL:any){

  // }
  // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  //   this.dialog.open( {
  //     width: '250px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }
}
