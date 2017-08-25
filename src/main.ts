import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/module/app.module';

// Starts angular application (main app)
platformBrowserDynamic().bootstrapModule(AppModule);
