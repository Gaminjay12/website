import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
while True:
    PORT = 8080
    HANDLER = http.server.SimpleHTTPRequestHandler
    user_input = input("Q to quit> ")
    if user_input == "q":
        break