import { Component, Inject } from '@angular/core';
import { BaseEditor } from '../../baseeditor';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CardItem } from 'src/app/shared/card.item';

@Component({
  selector: 'app-checklistcard',
  templateUrl: './noteeditor.component.html',
  styleUrls: ['./noteeditor.component.scss']
})
export class NoteEditorComponent extends BaseEditor {
  public text: string;
  public title: string;
  public cardItem: CardItem;

  constructor(
    private dialogRef: MatDialogRef<NoteEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      super();
      this.cardItem = data.cardItem
      this.text = this.cardItem.data.additional.text;
      this.title = this.cardItem.data.title;
  }
  onSubmit() {
    this.cardItem.data.additional.text = this.text;
    this.cardItem.data.title = this.title;
    this.dialogRef.close();
  }
}
