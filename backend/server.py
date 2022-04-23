#!/usr/bin/env python3

from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return 'Hello World!'

if __name__ == "__main__":
    app.run()
