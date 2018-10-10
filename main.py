from flask import Flask, render_template, request, url_for, redirect
from funcs import get_data_form, write_json, read_json, get_check_psw, letter
import os
from flask_mail import Mail, Message

host = os.getenv('IP', '0,0,0,0')
port = int(os.getenv('PORT', 8080))

app = Flask(__name__)
mail = Mail(app)
# Конфиги для почты
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'shumskayaolesya59@gmail.com'
app.config['MAIL_PASSWORD'] = 'qwaqwa123'
app.config['MAIL_DEFAULT_SENDER'] = 'shumskayaolesya59@gmail.com'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

# creating instance of Mail
mail = Mail(app)

@app.route('/sendmail')
def send_mail():
    msg = Message('Hello from site!', recipients = ['shumskayaolesya59@gmail.com'])
    msg.body = 'This is the email body'
    mail.send(msg)
    return '<h1>Sended!!!</h1>'

@app.route('/', methods = ['GET', 'POST'])
@app.route('/main', methods = ['GET', 'POST'])
def main():
    if request.method == 'POST':
        data = get_data_form()
        write_json(data)
        msg = Message('Письмо с сайта', recipients = ['shumskayaolesya59@gmail.com'])
        msg.body = letter(data)
        mail.send(msg)
    return render_template('index.html')


@app.errorhandler(404)
def page_not_found(e):
    return "Ошибка, ошибка!!! <hr> {} <hr> <a href='{}'><h1>Back to main</h1>".format(e, url_for("main")), 404

@app.route('/entry', methods=['GET', 'POST'])
def entry():
    return render_template('entry.html')

@app.route("/klientdata", methods=['GET','POST'])
def get_user_data():
    data = read_json("data.json")
    if request.method == 'POST':
        if not get_check_psw():
            return redirect(url_for('entry'))
    return render_template("user_data.html", data=data)


if __name__ == '__main__':
    app.run(host=host,port=port, debug=True)