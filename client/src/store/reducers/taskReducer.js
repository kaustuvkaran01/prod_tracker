const initState = {
    tasks:[{
            id:1,
            name:"sleep",
            userId:"jaskeerat",
            count:0
        },
    ]
}

const taskReducer = (state = initState, action) => {
    switch (action.type) {
      case "UPDATE_TASK_COUNT":
        state.tasks.forEach((element, i) => {
          if (element.id === action.id) {
            state.tasks[i].count += action.count;
          }
        });
        return state;

      default:
        return state;
    }
}

export default taskReducer;