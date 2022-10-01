import { Client, Account } from "appwrite";
export const client = new Client();
export const account = new Account(client);

client
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('633642f2dacdfff2a1d3') // Your project ID
;
