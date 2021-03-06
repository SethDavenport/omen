import 'codemirror'
import 'codemirror/mode/gfm/gfm'
import 'codemirror/addon/display/placeholder'

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { NgReduxModule, NgRedux } from 'ng2-redux'
import { CodemirrorModule } from 'ng2-codemirror'

import { IAppState, rootReducer } from './store'

import { FileActions } from './actions/file.actions'
import { SettingsActions } from './actions/settings.actions'

import { IPCService } from './services/IPC.service'

import { AppComponent } from './app.component'
import { ContentEditorComponent } from './components/content-editor.component'
import { FileListComponent } from './components/file-list.component'
import { SidebarComponent } from './components/sidebar.component'
import { WordCountComponent } from './components/word-count.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule.forRoot(),
    CodemirrorModule
  ],
  declarations: [
    AppComponent,
    ContentEditorComponent,
    FileListComponent,
    SidebarComponent,
    WordCountComponent
  ],
  providers: [
    IPCService,
    FileActions,
    SettingsActions
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, {})
  }
}
