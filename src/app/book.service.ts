import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  getBookUrl: string;
  constructor(private readonly httpClient: HttpClient) {
    this.getBookUrl =
      'https://www.googleapis.com/books/v1/volumes/{{volumeId}}';
  }

  getBookFromApi(bookId = '_LettPDhwR0C') {
    return this.httpClient.get(this.getBookUrl.replace('{{volumeId}}', bookId));
  }
}
