import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonacoEditorModule, NgxMonacoEditorConfig  } from 'ngx-monaco-editor';
import { NavbarComponent } from './navbar/navbar.component';



const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'assets', 
  defaultOptions: { scrollBeyondLastLine: false }, 
  onMonacoLoad: () => { console.log((<any>window).monaco); } 
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MonacoEditorModule.forRoot(monacoConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
