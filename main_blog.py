# for dynamic server
#from cmsimde import flaskapp
#
# for static server
import blog
from gevent.pywsgi import WSGIServer

#flaskapp.app.run(host="0.0.0.0", debug=True)
# for dynamic server
#http_server = WSGIServer(('0.0.0.0', 8080), flaskapp.app)
#
http_server = WSGIServer(('0.0.0.0', 8080), blog.app)
http_server.serve_forever()