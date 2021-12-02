const data = {
    "name": "app",
    "description": "Dit is een description",
    "number": 150,
    "boolean": true,
    "prop": null, 
    "person": {
        "name": "Adriaan",
        "lastName": "Glibert"
    },
    "people": [
        {
            "name": "Robin"
        }
    ]
}

console.log(JSON.stringify(data));

const strData = '{"name":"app","description":"Dit is een description","number":150,"boolean":true,"prop":null,"person":{"name":"Adriaan","lastName":"Glibert"},"people":[{"name":"Robin"}]}';

console.log(JSON.parse(strData));