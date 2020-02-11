import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'monaco-editor-demo';
  editorOptions = {theme: 'vs-dark', language: 'csharp'};
  // code: string= 'function x() {\nconsole.log("Hello world!");\n}';
  code: string;
  onInit(editor) {
      let line = editor.getPosition();
      console.log(line);
    }

    onChange(editorCode){
      //console.log(editorCode);
      this.code = editorCode;
    }

    saveCodeChanges(input){
     // this.code = input;
      console.log(input);
      console.log(this.code);
      alert('Your code has been successfully saved!!');
     // location.reload();
    }

}
