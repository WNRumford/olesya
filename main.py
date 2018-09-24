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

@app.route('/', methods = ['GET', 'POST'])
@app.route('/main', methods = ['GET', 'POST'])
def main():
    if request.method == 'POST':
        name = request.form['name']
        dog = request.form['dog']
        email = request.form['email']
        phone = request.form['phone']
        msg = request.form['msg']
        error = None
    return render_template('index.html', form_dict=request.form)



if __name__ == '__main__':
    app.run(host=host,port=port, debug=True)