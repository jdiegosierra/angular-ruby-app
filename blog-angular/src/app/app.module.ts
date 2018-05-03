import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 


import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesService } from './articles/shared/articles.service';
import { ArticleDetailService } from './article-detail/shared/article-detail.service';

import {TableModule} from 'primeng/table';
import { DatatableExampleComponent } from './datatable-example/datatable-example.component';
import {ButtonModule, PasswordModule, DataTableModule ,SharedModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ColorPickerModule} from 'primeng/colorpicker';
import { AppRoutingModule } from './/app-routing.module';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    DatatableExampleComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
	  TableModule,
    ButtonModule,
    PasswordModule,
    DataTableModule,
    SharedModule,
    InputTextareaModule,
    ColorPickerModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  	ArticlesService,
    ArticleDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
