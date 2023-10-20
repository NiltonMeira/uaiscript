import { functions } from './functions'
import { execute, values } from './exeModel'

execute.forEach((execution) => {
    if(execution.id != 1){
      valuesForExecution = execution.parameters.map(
          (parameter) => values.find((element) => element.name == parameter).value
      )
      functions[execution.id](...valuesForExecution)
    }else{
      values.push({name: execution.parameters[0], value: execution.parameters[1]})
    }
})