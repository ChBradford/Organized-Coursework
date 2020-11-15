#PA2 clientx
#Christopher Bradford
#Idama Okumagba
import socket
from threading import *
# Receive function where it checks messages coming in
def receive():
    while True:
        msg = s.recv(1024).decode()
        if msg:
            print(msg)

#sending function to send input to another client
def send():
    while True:
       msg = input("")
       s.send(msg.encode())

s = socket.socket()
port = 12345
s.connect(('127.0.0.1', port))
s.send("Alice".encode())

receive_thread = Thread(target=receive)
send_thread = Thread(target=send)
receive_thread.start()
send_thread.start()
receive_thread.join()
