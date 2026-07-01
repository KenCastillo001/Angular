import {Injectable , inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environmemnt} from '@environments/environment';
import {LogLevel , LogContext , LogEntry} from './logger.types';

@Injectable({ProvidedIn : "root"})