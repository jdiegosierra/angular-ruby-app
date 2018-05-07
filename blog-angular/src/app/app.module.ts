import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule, PasswordModule, DataTableModule, SharedModule} from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ColorPickerModule } from 'primeng/colorpicker';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GrowlModule } from 'primeng/growl'; 

import { AppComponent } from './app.component';

import { ArticlesComponent } from './articles/articles.component';
import { ArticlesService } from './articles/shared/articles.service';

import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleDetailService } from './article-detail/shared/article-detail.service';

import { ArticleNewComponent } from './article-new/article-new.component';
import { ArticleNewService } from './article-new/shared/article-new.service';

import { ArticleEditComponent } from './article-edit/article-edit.component'
import { ArticleEditService } from './article-edit/shared/article-edit.service'

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleDetailComponent,
    ArticleNewComponent,
    ArticleEditComponent
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
    HttpClientModule,
    EditorModule,
    FormsModule,
    InputTextModule,
    PanelModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    GrowlModule
  ],
  providers: [
  	ArticlesService,
    ArticleDetailService,
    ArticleNewService,
    ArticleEditService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
