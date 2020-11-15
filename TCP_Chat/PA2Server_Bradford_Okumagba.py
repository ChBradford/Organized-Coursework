#PA2
#Christopher Bradford
#Idama Okumagba
​
#Multithreading is used in this program to support two clients
#where one can be interrupted (disconnected) while the other remains in use.
#Multithreading also allows for each thread to have its own variables
#(such as username) while all users share some global variables from the server
import socket
from threading import *

#function for be creating different threads for the X and Y clients
def accept_incoming_connections(x,clientOrd):
    while True:
        # Establish connection with client.
        client, client_address = s.accept()
        print("%s:%s has connected." % client_address)
        x = x - 1
        print("Waiting for %s users" % x)
        addresses[client] = client_address
        Thread(target=handle_client, args=(client,x,clientOrd,)).start()
#function for handling message passing and broadcasts chat and its history to clients
def handle_client(client,x,clientOrd):
    name = client.recv(1024).decode()
    client.send('Welcome'.encode()) #Send welcome to clients as they enter
    clients[client] = name
    while(True): #To broadcast messages
      message=client.recv(1024).decode()
      broadcast(message,x,clientOrd,name)

#function for broadcasting chat to all the clients
def broadcast(message,x,clientOrd,head=""):
   if head not in clientOrd:    #Confirm that name is not already in array before appending name to it
      clientOrd.append(head)
   if(len(clientOrd)>=2):       #Confirm both users are in the server
      for sock in clients:
          sock.send((head + ": " + message).encode()) #Send message to clients to decode and print
          if(len(clientOrd) == 2):  #For the first server notice to show who's message arrived first
            print(clientOrd[0] + "'s message received before " + clientOrd[1] + "'s")
            sock.send((" SERVER NOTICE: " + clientOrd[0] + "'s message received before " + clientOrd[1] + "'s").encode())
            clientOrd.append("Junkval") # Appending something to tne end of client order as to make it not repeat itself
#storing the clients and their addresses
clients = {}
addresses = {}
#counting connections
x = 2
# for establishing order between messages
clientOrd = []
# creating a socket
s = socket.socket()
# reserve a port
port = 12345
# binding to the port to listen
s.bind(("", port))
# put the socket into listening mode
s.listen(2)
