# What is a Server?
A server is a program that:
- Waits for requests
- Processes the request
- Sends a response back

# What is HTTP?
- HTTP stands for HyperText Transfer Protocol.
- HTTP is a set of rules that helps a browser and a server talk to each other.

## Needs of HTTP
- Without HTTP:
Browser wouldn’t know how to ask
Server wouldn’t know how to reply

- So HTTP decides:
How to send requests
How to send responses
What format the data should be in

## HTTP Methods:
- These are basically the request to the server from the client or users.

- GET: When client want to get some some data from the server.
Ex: Show me the list of students
- POST: When client want to send some data to server.
Ex: Filling and submitting a signup form, Create a tweet
- PATCH: When client want to update some existing data(updates only specific fields).
- PUT: PUT is used when you change or update existing data(updates the whole data).
- DELETE: When client wants to delete some data.
## HTTP Status Codes:
- What kind of response it is (Success, Error, Redirect,etc).

| Code | Meaning |
|------|---------|
| 200 | OK (Success) |
| 201 | Created |
| 301 | Redirect |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Server Error |

- If the status code starts with:
* 1xx: Informational responses
*2xx: Successful responses
*3xx: Redirection messages
*4xx: Client error responses
*5xx: Server error responses

# What is a Port in a Server?
- A port is like a door number of a server.
- A port number tells your computer which service or program should receive the request.
- A single port can be used by only one service or application at a time.

## Localhost: 
- It basically means my machines or my local machines or my own computer.
Ex = http://localhost:3000
- It means open the website or server that is running on my own computer at port 3000.


# HTTP REQUEST HEADERS (NOTES)

## What is an HTTP Request Header?

An HTTP request header is extra information that a browser or app
sends along with a request to the server.

=> It tells the server:
- Who is sending the request
- What type of data is being sent
- What type of response is expected
- Authorization details (login token, etc.)

IMPORTANT:
👉 Headers do NOT contain the main data (body).
👉 They only describe the request.

--------------------------------

### Why Request Headers are Important?

Request headers help the server understand:

- How to read the incoming data
- How to respond correctly
- Whether the user is allowed (authorized) or not

--------------------------------

## Common HTTP Request Headers

Header Name        → Simple Meaning

Host               → Which website/server you want
User-Agent         → Which browser or app you are using
Content-Type       → Type of data you are sending
Accept             → Type of data you want back
Authorization      → Login token or authentication info
Content-Length     → Size of the data being sent




# URL (Uniform Resource Locator)
-A URL is the address of a resource on the internet.

Example:
https://www.google.com/search?q=nodejs

### Parts of URL:

1) Protocol:
   http  -> Not secure
   https -> Secure (encrypted)

2) Scheme:
    https://
    -> It tells how the browser should talk to the server means the rule or method used to connect to a website.
2) Domain:
   www.google.com
   -> Website/server name
    I)  Subdomain:
        www. -> 
        It tells the server which section of the website you want to open.It helps the server separate different parts of the same website.
        EX - www.example.com → main website
            - blog.example.com → blog section
            - api.example.com → API services
    II) Naked Domain or Apex Domain:
          google.com ->  
          It is the base/root domain of the website.All other versions (like www.google.com, mail.google.com) come from this main domain.When you type google.com, it usually automatically redirects to www.google.com    

3) Path:
   /search
   -> Page or resource location

4) Query String or Query Parameters
   ?q=nodejs
   -> Extra data sent to server means what thing a client wants to search.

### HTTP vs HTTPS:
- HTTP  : Data is not secure
- HTTPS : Data is secure and encrypted

## NOTE: 