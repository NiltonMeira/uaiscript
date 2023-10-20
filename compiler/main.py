import os



def compile (id, message):
 return "{" + f"id: {id}, parameters: [{message}]" + "}"

path = "./code"
caminhos = os.listdir(path)
main = list(filter(lambda x : x == "script.uai", caminhos))

with open(path+"/"+main[0], "r") as arquivo:
 arichive = arquivo.read()

# context = arichive.replace("\n", "").split(";")
context = arichive.split("\n")

print(context)
print("============")

toJs = "export const execute = ["
_if = False
ifLines = 0

for item in context:
 if item == "":
  continue
 id = 0
 message = ""

 if item.find("}") > 0:
   _if = False
   ifLines = 0
   continue
 if _if:
   ifLines += 1

  
 # verifica se atribuição
 elif item.find("=") > 0:
  declaration = item.replace(" ","").split("=")
  id = 0
  message = f"'{declaration[0]}', {declaration[1]}"


 #verifica se é function
 elif item.find("(") > 0:
  print(f"{item}")
  function = item.replace(" ","").split("(")
  match function[0]:
   case 'tremQueMostra':
     id = 1
     message = function[1].replace(")" , "").replace(";","")
     
   case 'tremQueCheca':
     id = 2
     end =False
     message = function[1].replace(")" , "").replace(";","").replace("{","") + f"{ifLines}"

 toJs += compile(id, message).replace(";","") + ","


toJs = toJs[:len(toJs)-1] + "]" 
toJs += "\n \nexport const values = []"
print(toJs)

    


outputPath = "./engine/output.mjs"
output = open(outputPath, "w")
output.write(toJs)
import os



def compile (id, message):
 return "{" + f"id: {id}, parameters: [{message}]" + "}"

path = "./target"
caminhos = os.listdir(path)
main = list(filter(lambda x : x == "script.uai", caminhos))

with open(path+"/"+main[0], "r") as arquivo:
 arichive = arquivo.read()

# context = arichive.replace("\n", "").split(";")
context = arichive.split("\n")

print(context)
print("============")

toJs = "export const execute = ["
_if = False
ifLines = 0

for item in context:
 if item == "":
  continue
 id = 0
 message = ""

 if item.find("}") > 0:
   _if = False
   ifLines = 0
   continue
 if _if:
   ifLines += 1

  
 # verifica se atribuição
 elif item.find("=") > 0:
  declaration = item.replace(" ","").split("=")
  id = 0
  message = f"'{declaration[0]}', {declaration[1]}"


 #verifica se é function
 elif item.find("(") > 0:
  print(f"{item}")
  function = item.replace(" ","").split("(")
  match function[0]:
   case 'tremQueMostra':
     id = 1
     message = function[1].replace(")" , "").replace(";","")
     
   case 'tremQueCheca':
     id = 2
     end =False
     message = function[1].replace(")" , "").replace(";","").replace("{","") + f"{ifLines}"

 toJs += compile(id, message).replace(";","") + ","


toJs = toJs[:len(toJs)-1] + "]" 
toJs += "\n \nexport const values = []"
print(toJs)

    


outputPath = "./engine/output.mjs"
output = open(outputPath, "w")
output.write(toJs)
