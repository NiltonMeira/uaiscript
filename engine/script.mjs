import { functions } from './functions.mjs'
import { execute } from './exeModel.mjs'

const values = []

execute.forEach((execution) => {
    if(execution.id != 0){
      const valuesForExecution = execution.parameters.map(
        (parameter) => values.find((element) => element.name == parameter).value
      )
      functions[execution.id](...valuesForExecution)
    }else{
      const found_index = values.findIndex((element)=> element.name == execution.parameters[0])
      if(found_index != -1) {
        values[found_index].value = execution.parameters[1]
      }else{
        values.push({name: execution.parameters[0], value: execution.parameters[1]})
      }
    }
})