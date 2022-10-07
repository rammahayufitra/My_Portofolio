from flask import Flask, render_template 

app = Flask(__name__)

@app.route('/', methods=['GET'])
def portfolio():
    return render_template('index.html')

@app.route('/blog', methods=['GET'])
def blog():
    return render_template('blog.html')

@app.route('/tutorial', methods=['GET'])
def tutorial():
    return render_template('tutorial.html')

app.run()