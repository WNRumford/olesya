from flask import request, render_template
import json
from datetime import datetime, date, time

# получаем дату и время записи------------------------------
def current_date():
    d = datetime.now()
    res = "Дата: {}, время: {}-{}".format(d.date(), d.hour, d.minute)
    return res

# Приём данных формы ------------------------------
def get_data_form():
    name = request.form['name']
    dog = request.form['dog']
    email = request.form['email']
    phone = request.form['phone']
    msg = request.form['msg']
    error = None
    current = current_date()
    return {'name':name, 'dog':dog, 
            'email':email, 'phone':phone, 
            'msg':msg, 'error':error,
            "current":current}

# Запись данных в json файл
def write_json(d):
    
    try:
        data = json.load(open('data.json'))
    except:
        data = []
    
    data.append(d)
    
    with open('data.json', 'w') as file:
        json.dump(data, file, indent=2, ensure_ascii=False)


# чтение данных из json файла
def read_json(file):
    if file:
        with open(file, "r") as f:
            user_data = json.load(f)
        return user_data
    else:
        return "Данных нету"

