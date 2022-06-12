export const rankEnum = {
    low:{text: "Низкий", value: "low"},
    medium:{text:"Средний", value: "medium"},
    high:{text:"Высокий", value: "high"}
}
export const statusArray ={
    opened:[{status:"inProgress", text:"Взять в работу"}, {status:"complete", text:"Сделано"}], 
    inProgress:[{status:"opened", text:"Переоткрыть"}, {status:"testing", text:"Тестирование"}, {status:"complete", text:"Сделано"}],
    testing:[{status:"opened", text:"Переоткрыть"}, {status:"complete", text:"Сделано"}],
    complete:[{status:"opened", text:"Переоткрыть"}]
}
export const statusEnum = {
    opened: {text:"Переоткрыть"},
    inProgress: {text:"Взять в работу"},
    testing :{text:"Тестирование"},
    complete :{text:"Сделано"}
}
export const typeEnum={
    task: {text: "Задача", value: "task"},
    bug: {text:"Ошибка", value: "bug"}
}
export const typeOptions =[{text:"Задача", value:"task"}, {text:"Ошибка", value:"error"}];
export const rankOptions =[{text:"Высокий", value:"high"}, {text:"Средний", value:"medium"}, {text:"Низкий", value:"low"}];
export const timeOptions =[{text:"Минуты", value:"minute"}, {text:"Часы", value:"hour"}, {text:"Дни", value:"day"}];
