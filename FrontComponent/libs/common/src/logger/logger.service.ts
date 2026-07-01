import {Injectable , inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';
import {LogLevel , LogContext , LogEntry} from './logger.types';

@Injectable({ProvidedIn : "root"})
export class LoggerService{
    private http = inject(HttpClient);
    private context :LogContext= {};
    private LogLevel:LogLevel = environment?.production ? "ERROR" : "DEBUG";
    private queue: LogEntry[] = [];

    setContext(context : Partial<LogContext>){
        this.context = {...this.context  , ...context}
    }

    clearContext(){
        this.context= {}
    }

error(
    message : string, error?: Error | string, data?: Record<string , any>,
): void{
    const stack = error instanceof Error ? error.stack : undefined;
    this.log("ERROR" , message , stack , data)
}

warn(
    message : string,
    data? : Record<string , any>,
): void { this.log("WARN" , message , stack , data)
}
info(
    message : string, data? : Record<string , any>,
): void { this.log("INFO" , message , stack , data)}
debug(
    message : string, data? : Record<string , any>,
): void {  this.log("DEBUG" , message , stack , data)}

flush():void{
    if(this.queue.length === 0) return;

    const batch = this.queue.splice(0 , queue.length);
    this.http.post(`${environment.api.baseUrl}/logs`, {entries :batch})
    .subscribe({
        error : (err)=>{
            console.error("")
        }
    })
}
}