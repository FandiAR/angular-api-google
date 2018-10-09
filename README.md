1.  Download CoreUI for Angular admin template based on Bootstrap here:
    https://github.com/coreui/coreui-free-angular-admin-template .
    
2.  Download and install NodeJs (Node version 8.9 or higher, NPM version 5.5.1 or higher) on your machine:
    https://nodejs.org/en/download/ .
    Check version of Node: node -v .
    Check version of NPM: npm -v .
    
3.  Install Angular on your machine:
    npm install -g @angular/cli .
    
4.  Extract rar and open project using your favorite text editor (I usually use Visual Studio Code). If you interest to use Visual Studio Code, you can download here https://code.visualstudio.com/download .

5.  Open the terminal console in your Visual Studio Code. And enter command: npm install .

6.  node_modules folder will be formed.

7.  Open https://developers.google.com/knowledge-graph/ from your browser and follow the instructions to use Google Knowledge Graph Search API till you have YOUR PERSONAL API_KEY for this API.

8.  Open file src/app/services/person.service.ts and edit code in line 9 ==> private API_KEY = 'YOU_API_KEY_HERE' and replace the content of API_KEY variable with YOUR API KEY that you get from Google Knowledge Graph (API_KEY always contains a number of random letters that generated automatically by Google). Save the project after you change this line.

9.  From Visual Studio Console nter command: ng serve --open .
