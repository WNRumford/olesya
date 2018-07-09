from flask import Flask, render_template, request, url_for
import os

host = os.getenv('IP', '0,0,0,0')
port = int(os.getenv('PORT', 8080))

app = Flask(__name__)

# @app.route('/')
# @app.route('/main')
# @app.route('/index')
# def land():
#     pass

@app.route('/')
def hello():
    return '<h1>Hello! Olesya!!!</h1>'


if __name__ == '__main__':
    app.run(host=host,port=port, debug=True)