"""
webserver.py
"""

from flask import Flask, render_template, request
from flask import send_from_directory
import requests
import os


# Create application, and point static path (where static resources like images, css, and js files are stored) to the "static folder"
app = Flask(__name__,static_url_path="/static")


@app.route('/')
def index_page():
    return render_template("index.html") # Render the template located in "templates/index.html"


@app.route('/<some_path>')
@app.route('/<some_path>/')
def about(some_path):
    if some_path[-5:] != '.html':
        some_path = some_path + '.html'
    return render_template(some_path)


@app.route('/blog/<some_path>')
@app.route('/blog/<some_path>/')
def blog(some_path):
    if some_path[-5:] != '.html':
        some_path = some_path + '.html'
    return render_template('/blog/' + some_path)


@app.route('/email', methods=['GET'])
def show_email_page():
    return render_template("/email.html", notifications=[])

@app.route('/email', methods=['POST'])
def send_email():
    name = request.form.get("Name")
    email = request.form.get("Email")
    subject = request.form.get("Subject")
    message = "Name: " + name + "<br>" + "Email: " + email + "<br>" + "Subject: " + subject + "<br>" + request.form.get("Message")
    notifications = []
    
    data = {
        "from": os.environ["INFO253_MAILGUN_FROM_EMAIL"],
        "to": os.environ["INFO253_MAILGUN_TO_EMAIL"],
        "subject": subject,
        "html": "<html>" + message + "</html>",}
    
    auth = (os.environ["INFO253_MAILGUN_USER"], os.environ["INFO253_MAILGUN_PASSWORD"])

    r = requests.post(
        "https://api.mailgun.net/v3/{}/messages".format(os.environ["INFO253_MAILGUN_DOMAIN"]),
        auth=auth, data=data)    
    
    if r.status_code == requests.codes.ok:
        notifications.append(name + ", your email was sent")
    else:
        notifications.append("You email was not sent. Error code:")
        notifications.append(r.status_code)

    return render_template("/contact.html", notifications=notifications)
