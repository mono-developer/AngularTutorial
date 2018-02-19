import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { RequestCache, RequestCacheWithMap } from './request-cache.service';

import { AppComponent }         from './app.component';
import { AuthService }          from './auth.service';
import { ConfigComponent }      from './config/config.component';
import { DownloaderComponent }  from './downloader/downloader.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HttpErrorHandler }     from './http-error-handler.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';
import { PackageSearchComponent } from './package-search/package-search.component';
import { UploaderComponent }    from './uploader/uploader.component';

import { httpInterceptorProviders } from './http-interceptors/index';
import { FooComponent } from './foo/foo.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { TtvComponent } from './ttv/ttv.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true,
        put204: false // return entity after PUT/update
      }
    )
  ],
  declarations: [
    AppComponent,
    ConfigComponent,
    DownloaderComponent,
    HeroesComponent,
    MessagesComponent,
    UploaderComponent,
    PackageSearchComponent,
    FooComponent,
    MyNewComponentComponent,
    TtvComponent,
  ],
  providers: [
    AuthService,
    HttpErrorHandler,
    MessageService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
