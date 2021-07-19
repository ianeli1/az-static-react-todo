# Azure Static Web Apps demo

## How to deploy

 - Create an Azure Storage Account, save the Connection String from the "Access Keys" blade.
 - Create a container inside that account called "todo", inside add a todos.json file containing `[]`.
 - Fork this repository.
 - Create a new Static Web App with the newly forked repository.
 - Add an Application Setting called "ConnString" with the connection string from the Storate Account as the value.

### Tests
 - Accessing the index ("/") should return a functional UI
 - Making a GET request to "/api/getTodos" should return a JSON with all the entries

