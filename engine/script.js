import { functions } from './functions'
import { execute, values } from './exeModel'

execute.forEach((execution) => {
    valuesForExecution = execution.parameters.map(
        (parameter) => values.find((element) => element.name == parameter).value
    )
    functions[execution.id](...valuesForExecution)
})