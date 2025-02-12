import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { IProjetos } from '../../../interface/IProjetos.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule,TranslateModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent implements OnInit{

  constructor (
    public _dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) private  _data: IProjetos
  ){}
  ngOnInit(): void {

    this.getData.set(this._data);
  }
  public closeModal(){
    return this._dialogRef.close();
  }

  public getData = signal<IProjetos | null>(null);
}
