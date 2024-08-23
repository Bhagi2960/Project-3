import pandas as pd
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('index.html')

@app.route('/api/v1.0/data')
def renderData():
    url = 'static/Resources/stations_export.csv'
    df = pd.read_csv(url)

    return df.to_json(orient='records')