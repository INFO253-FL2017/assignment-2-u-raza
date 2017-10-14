# What is the function of the following technologies in your assignment:

HTML: Provides the skeleton structure for the webpages, and includes the static content.
CSS: Used for styling various html elements across web pages consistently and efficiently.
JavaScript: Used to add dynamic interactions, form validation etc.
Python: Powers the server side programming for responding to various webpage requests, using Flask library.
Flask: A python library which makes it very easy to implement the webserver for the website on a local port.
HTTP: Hyper Text Transfer Protocol, is the format/protocol used for communication between browsers and the webserver.
GET and POST requests: Both are methods of submitting content to the server from a form that is filled by the user (in this case the contact form). GET is
usually used for smaller amounts of data than can be appended to the url, while POST is used for larger amounts of data.

# How does HTML, CSS, and JavaScript work together in the browser for this assignment?

HTML contains the generic structure of webpages, navigation links, blog post content etc., which is styled using CSS that is stored in the /static folder on
server side. Javascript adds local interactions in browser including creation of dynamic notifications, form validation and storing user comments locally.

# How does Python and Flask work together in the server for this assignment?

Python is being used here as a programming language for server programming such that it can identify different requests and route them to appropriate pages stored
on server side. Flask helps us create the actual webserver that is able to serve pages via a local port. The request module of Flask helps get form data from user
while the requests module of Python has easy to use commands for making web requests. In this assignment, we are using it to connect with the mailgun API and send
an email using content collected from user input in the contact form.

# List all of the possible GET and POST requests that your server returns a response for and describes what happens for each GET and POST request

- Every time a webpage is accessed, a GET request is made, and a successfull routing results in a "Status OK 200" response.
- EVery time the contact form is submitted, a POST request is made and data in the form is submitted to the server, which is then collected in Python code of the
webserver and used to build an object that can be sent to mailgun using its API. A successful submission results in a Status OK 200 response.
- If a page or submission fails due to absense of the target route or page, a GET or POST request will generate a Status 400 response. If however, there is some
problem in the server code, it will return a Status 500 error.
