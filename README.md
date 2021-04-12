# Zuri Training NodeJS-File-System-Task
Tasks:
1. Create a script file that fetches data from [JSON PLACEHOLDER POSTS](http://jsonplaceholder.typicode.com/posts)
2. Write the JSON data gotten from the API to a file called posts.json or posts.txt
3. posts.json or post.txt should be in a directory file called result.
4. Create a github repository and push your work.

__Additional description__


![http request](https://user-images.githubusercontent.com/35394098/114377144-00253880-9b8f-11eb-94af-c7cb910c6785.png)

The above code snippet makes a request to the specified url and returns the data to be written to tha file.
After the request is complete (line 13) the data received is written to the file (line 14-20). 
If there is an error, it will be shown to the user (line 16-17).

If there is an error during http get request, the code snippet bellow will throw an error message.

![http error](https://user-images.githubusercontent.com/35394098/114378196-24cde000-9b90-11eb-8e3c-675ad4270910.png)
