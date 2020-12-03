export const updateCounter = (task) => {
    return (dispatch,getState,{ getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('tasks').add({
            ...task,
            id:1,
            taskName:'sleep',
            userId:'jaskeerat',
            count:0
        }).then(() => {
            dispatch({ type: "UPDATE_TASK_COUNT", task });

        })
    }
}