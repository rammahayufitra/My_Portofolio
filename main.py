from flask import Flask, render_template 

app = Flask(__name__)

@app.route('/', methods=['GET'])
def portfolio():
    return render_template('index.html')

app.run()