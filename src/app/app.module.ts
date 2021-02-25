import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageItemComponent } from './page-item/page-item.component';
import { PageListComponent } from './page-list/page-list.component';
import { PageCardComponent } from './page-card/page-card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SharedService } from './services/shared.service';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { SearchPipe } from './pipes/search.pipe';
import { SearchTitlePipe } from './pipes/searchTtile.pipe';
import { SearchTypePipe } from './pipes/searchType.pipe';
import { CheckboxComponent } from './checkbox/checkbox.component';

const routes: Routes = [
  {path: 'list', component: PageListComponent},
  { path: 'item/:id', component: PageCardComponent },
  { path: 'pagination', component: PaginationComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PageItemComponent,
    PageListComponent,
    PageCardComponent,
    PaginationComponent,
    MultiselectComponent,
    SearchPipe,
    SearchTitlePipe,
    SearchTypePipe,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
