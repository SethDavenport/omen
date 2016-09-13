import { Component } from '@angular/core';
import { File } from './file';

const FILES: File[] = [
  {
    title: 'File 1',
    content: 'My Content'
  },
  {
    title: 'File 2',
    content: 'New Content'
  }
]

@Component({
  selector: 'my-app',
  template: `
    <div class="flex-container container">
      <div class="sidebar">
        <input class="input-block" type="text" placeholder="Search" />
        <hr />
        <div class="file-listing">
          <ul class="list-plain">
            <li *ngFor="let file of files" (click)="onFileSelect(file)">
              <span class="fa"
                [class.fa-file-text-o]="file === selectedFile"
                [class.fa-file-text]="file !== selectedFile"
                ></span> {{file.title}}
            </li>
          </ul>
        </div>
      </div>
      <div class="flex-col">
        <content-editor [file]="selectedFile"></content-editor>
      </div>
    </div>
  `
})
export class AppComponent {
  files = FILES
  selectedFile: File

  onFileSelect(file: File): void {
    this.selectedFile = file
  }
}
