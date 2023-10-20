import { functions } from './functions.mjs'
import { execute, values } from './exeModel.mjs'

execute.forEach((execution) => {
    if(execution.id != 0){
      const valuesForExecution = execution.parameters.map(
        (parameter) => values.find((element) => element.name == parameter).value
      )
      functions[execution.id](...valuesForExecution)
    }else{
      values.push({name: execution.parameters[0], value: execution.parameters[1]})
    }
})