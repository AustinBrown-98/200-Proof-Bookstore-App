import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './book.service';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookInfoPanelComponent } from './book-info-panel/book-info-panel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, BookSearchComponent, BookInfoPanelComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
