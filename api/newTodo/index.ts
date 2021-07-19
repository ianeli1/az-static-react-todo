import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request. Adding a new todo');
    
    console.log(`Blob: ${context.bindings.blob === undefined}, type ${typeof context.bindings.blob}`)

    const Todos: string[] = context.bindings.blob

    

    if(req.body.todo){
        Todos.push(req.body.todo)
        context.res = {
            body: `Added ${req.body.todo}, total ${Todos.length}`
        }
        context.bindings.blobOut = JSON.stringify(Todos.sort())
        context.done()

        return
    }
    

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Missing value 'todo' in body",
        status: 400
    };
    context.done("Missing value 'todo' in body")
    return

};

export default httpTrigger;