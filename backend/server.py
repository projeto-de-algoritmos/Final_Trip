#!/usr/bin/env python3

from flask import Flask, request
from flask_cors import CORS
from countries import countries
from tourist_attraction import tourist_attraction

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return 'Hello World!'

@app.route('/recomendation', methods=['POST'])
def recomendation():
    data = request.json
    origin = countries[data['origin']]
    destiny = countries[data['destiny']]
    user_rank = data['recomendation']

    return {'recomendation': [tourist_attraction[origin][0]]}

if __name__ == "__main__":
    app.run()
