from flask import Flask, render_template, request, send_file, url_for



app = Flask(__name__)
app.config['SECRET_KEY'] = 'askdjnasdkjnasdkjansd'


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        file = 'test.txt'
        return send_file(file, as_attachment=True)
    return render_template('base.html')



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
