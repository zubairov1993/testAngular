import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageItemComponent } from './page-list/page-item/page-item.component';
import { PageListComponent } from './page-list/page-list.component';
import { PageCardComponent } from './page-list/page-card/page-card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SharedService } from './services/shared.service';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { SearchEmailPipe } from './pipes/searchEmail.pipe';
import { SearchTitlePipe } from './pipes/searchTitle.pipe';
import { SearchTypePipe } from './pipes/searchType.pipe';
import { CheckboxComponent } from './checkbox/checkbox.component';

const routes: Routes = [
  {path: '', component: PageListComponent},
  { path: 'item/:id', component: PageCardComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PageItemComponent,
    PageListComponent,
    PageCardComponent,
    PaginationComponent,
    MultiselectComponent,
    SearchEmailPipe,
    SearchTitlePipe,
    SearchTypePipe,
    CheckboxComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
