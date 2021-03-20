import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book-interfaces';

@Component({
  selector: 'app-book-info-panel',
  templateUrl: './book-info-panel.component.html',
  styleUrls: ['./book-info-panel.component.scss'],
})
export class BookInfoPanelComponent implements OnInit {
  @Input() book: Book;
  constructor() {}

  ngOnInit(): void {}

  getLogo() {
    return this.book.volumeInfo.imageLinks.smallThumbnail;
  }
}
