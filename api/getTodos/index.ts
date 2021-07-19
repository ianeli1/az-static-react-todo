import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log(`HTTP trigger function processed a request, returning all Todos: ${context.bindings.blob}`);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: context.bindings.blob,
        headers: {
            "content-type": "application/json"
        }
    };

};

export default httpTrigger;