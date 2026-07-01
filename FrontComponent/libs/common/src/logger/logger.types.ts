export type LogLevel= "DEBUG" | "INFO" | "WARN" | "ERROR" ;

export interface LogContext{
    correlationId? : string;
    transactionId? : string;
    feature?:string;
    route?:string;
    userId?:string;
    sessionId?:string;
    [key:string]:any;

}
export interface LogEntry{
    timestamp:string;
    level:LogLevel;
    message:string;
    context?:string;
    stackTrace?:string;
    data?:Record<string , any>;

}
export interface LogBatchDTO{
    entries : LogEntry[];
    }