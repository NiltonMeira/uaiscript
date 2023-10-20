import { execute, values } from './output.mjs'

for(let i = 0; i < execute.length; i++) {

  switch (execute[i].id) {
    case 0:
      declareVar(execute[i])
      break;
        
    case 1:
      console.log(values.find(element => element.name == execute[i].parameters[0]).value)
      break

    case 2:
      i += conditionFunction(execute[i])
      
    default:
      break;
  }
}

function declareVar(execution) {
  const found_index = values.findIndex((element)=> element.name == execution.parameters[0])
    if(found_index != -1) {
      values[found_index].value = execution.parameters[1]
    }else{
      values.push({name: execution.parameters[0], value: execution.parameters[1]})
    }
}

function conditionFunction(execution) {
  return execution.parameters[0] ? 0 : execution.parameters[1]
}