import os

path = "./target"
caminhos = os.listdir(path)
main = list(filter(lambda x : x == "script.uai", caminhos))

with open(path+"/"+main[0], "r") as arquivo:
	arichive = arquivo.read()

context = arichive.strip("\n","").split(";")
print(context)


list(filter(lambda x : x == "script.uai", caminhos))