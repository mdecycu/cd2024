from flask import Flask, send_from_directory

app = Flask(__name__)

# Route to serve the index.html file from the ./content directory
#@app.route('/')
#def index():
    #with open('content/index.html', 'r') as file:
        #html_content = file.read()
    #return html_content, 200, {'Content-Type': 'text/html'}

# Route to serve the index.html file from the content directory
@app.route('/')
def index():
    return send_from_directory('content', 'index.html')

# Route to serve static files from the ./cmsimde/static directory
@app.route('/cmsimde/static/<path:filename>')
def serve_static(filename):
    return send_from_directory('cmsimde/static', filename)

# Route to serve other HTML files from the content directory
@app.route('/<path:filename>')
def serve_html(filename):
    return send_from_directory('content', filename)

if __name__ == '__main__':
    app.run(debug=True)


