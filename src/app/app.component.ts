import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'monaco-editor-demo';
  
  // code: string= 'function x() {\nconsole.log("Hello world!");\n}';
  code: string;
  editorTheme: string="vs-light";
  toggleLabel: string = "Switch to Dark Mode";
  editorOptions = {theme: this.editorTheme, language: 'csharp'};
  onInit(editor) {
      let line = editor.getPosition();
      console.log(line);
    }

    onChange(editorCode){
      //console.log(editorCode);
      this.code = editorCode;
    }

    toggleTheme(input){
        if(this.toggleLabel === "Switch to Dark Mode")
        {
          this.toggleLabel = "Switch to Light Mode";
          this.editorTheme = "vs-dark";
          this.editorOptions = {theme: this.editorTheme, language: 'csharp'};
        }
        else if(this.toggleLabel === "Switch to Light Mode")
        {
          this.toggleLabel = "Switch to Dark Mode";
          this.editorTheme = "vs-light";
          this.editorOptions = {theme: this.editorTheme, language: 'csharp'};
        }
        
    }

    saveCodeChanges(input){
      console.log(this.code);
      alert('Your code has been successfully saved!!');
    }

}
