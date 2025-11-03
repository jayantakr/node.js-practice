NodeJS :-

- Javascript Runtime Environment.
- It is used for server side programming.
- Node.js is not a language, library or framework.

Installation :- 

1. Go to the Website :- 

👉 Visit: https://nodejs.org.

2. Download Node.js :-

👉 Click on the LTS (Recommended) version.
👉 Download the installer for your system (Windows/Mac).

3. Install Node.js
👉 Open the downloaded file.
👉 Click Next until it finishes.

4. Check if it’s installed.
- Open terminal or command prompt, and type: node -v.

Modules:

- It is a collection of code that provide your functionality.
- it is of three types:
    - Built In Modules
    Ex - require('fs')
    - 3rd Party Modules(External Modules) - npm install
    Ex - require('jsonwebtoken')
    - Custom Modules(My own)
    Ex - require('./math.js')
    ./ - means search iin current directory
    ../ - means go one directory up
    ../../ - means trwo directory up



NPM : Node Package Manager
->To make VS Code recognize what fs is, we need to install the package @types/node.
- npm is the standard package manager for node.js.
 i. library of package
 ii. command line tool


package.json - it is like configuration of file for your project. It contains the name, version,script, dependecies of our prject.(to get this we have to type in terminal npm init)

Dependecies : it is the 3rd party dependecies.(to get this we have to type in terminal npm install @types/node and a node_modules will be create automatically and if the node_modules get deleted then we can simple type npm install in the terminal )



Synchronous:

* Sync => These syncronous operations are known as Blocking Operations.
Synchronous (writeFileSync, readFileSync): blocks execution, returns results directly.
For example:
const fs = require('node:fs');

const contents = fs.readFileSync('notes.txt','utf-8');

console.log(contents);


Asynchronous:

* Async => These are asyncronous function and it is known as nonblocking operations.
Asynchronous (writeFile, readFile): 
- Asynchronous (writeFile, readFile): non-blocking, uses callbacks  
  to provide error/result.  
- Understanding difference is critical for backend development to  
  avoid blocking the app.
For example: 
const fs = require('node:fs')
console.log('Start of the Script');

fs.readFile('notes.txt','utf-8',function{error, data} {
    if(error) console.log(error);
    else console.log('content got',data);
});

console.log('End of the Script');

-> It needs a callback function(function()) to execute the code.

-> IN this in the output of this code it will not block the middle cord(fs.readFile) it will 1st give the start and end and the at last it will give the middle value but it is not happened in the Syncronous Function.

=>Every operations has an equivalent blocking(syncronous operations) and nonblocking(asyncronous operations) code.


module.exports(requiring files) :- 

- require() - a built-in function to include external modules that exist in separate files.
- module.exports - a special object.

File Handling :- 

- Node.js uses built-in fs (File System) module for file operations.
- No need to specify file path like ./fs as it is a core module.

File Operations :- 

- Can create, read, write, append, copy, delete files and directories.
- Functions are available in synchronous and asynchronous forms.

Synchronous vs Asynchronous:- 

- Synchronous (writeFileSync, readFileSync): blocks execution, returns results directly.
- Asynchronous (writeFile, readFile): non-blocking, uses callbacks to provide error/result.
- Understanding difference is critical for backend development to avoid blocking the app.

Writing Files :- 

- writeFileSync(path, data) creates or overwrites files synchronously.
- writeFile(path, data, callback) does the same asynchronously.
- Async versions require error handling via callback.

Reading Files :- 

- Specify encoding (usually 'utf8') to get string output, else buffer is returned.
- readFileSync returns content directly; readFile uses callback with error and data.

Appending to Files :-

- Use appendFile/appendFileSync for adding new data at the end without overwriting.
- Useful for logging incoming requests or user activities.

Directory Management :- 

- Create directories using mkdir with optional recursive option to create nested folders.
- Remove directories & files with rmdir and unlink.

- File Copy and Delete :- 

- Copy files with copyFile/copyFileSync.
- Delete files using unlink or unlinkSync.

File Metadata :- 

- Get file info using stat/statSync — includes file size, creation/modification times, type.

Error Handling:- 

- Always check for errors in async callbacks.
- Use try-catch when working synchronously to prevent app crashes.

Importance of Async Programming :- 

- Non-blocking I/O keeps server responsive.
- Mastering event-driven architecture, callbacks, promises, and async/await is essential.

Practical Use Cases :- 

- Logging user requests with timestamp and IP address into a log file.
- Creating and managing user data files.


Installing Packages :- 

- npm install <-package-name->
- node_modules -> The node_modules folder contains every installed dependency for your project.
- package_lock.json -> It records the exact version of every installed dependency, including its sub-dependencies and their versions.
- The package.json file contains descriptive and functional metadata about a project, such as a name, version and dependencies.(npm init)

require v/s import :- 

- import {sum} from "./math.js"

- We can't selectively load only the pieces we need with require but with import, we can selectively load only the pieces we need, which can save memory.
- Loading is synchronous for 'require' but can be asynchronous for 'import'.
