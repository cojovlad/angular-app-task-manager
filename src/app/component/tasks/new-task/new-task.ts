import {Component, EventEmitter, Output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {single} from 'rxjs';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask{

  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<{
    title: string,
    summary: string,
    date: string }
  >();

  enteredTitle = '';
  enteredSummary='';
  enterDueDate ='';

  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
      this.add.emit({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enterDueDate,
      });
  }
}
