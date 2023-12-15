import { ErrorHandler } from "@angular/core";

export class GlobalErrorHandlerService extends ErrorHandler {
	override handleError(error: any): void {
    console.log("GlobalErrorHandlerService caught exception:");
	console.log(error);
    }
}