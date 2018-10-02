from flask import Flask, render_template, request, url_for, redirect
from funcs import get_data_form, write_json, read_json
import os

host = os.getenv('IP', '0,0,0,0')
port = int(os.getenv('PORT', 8080))

app = Flask(__name__)


@app.route('/', methods = ['GET', 'POST'])
@app.route('/main', methods = ['GET', 'POST'])
def main():
    if request.method == 'POST':
        write_json(get_data_form())
        redirect('index.html')
    return render_template('index.html')

@app.errorhandler(404)
def page_not_found(e):
    return "Ошибка, ошибка!!! <hr> {} <hr> <a href='{}'><h1>Back to main</h1>".format(e, url_for("main")), 404

@app.route("/klientdata")
def get_user_data():
    data = read_json("data.json")
    return render_template('user_data.html', data=data)

if __name__ == '__main__':
    app.run(host=host,port=port, debug=True)