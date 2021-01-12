const BaseUrl = 'https://tiny-list.herokuapp.com/api/v1/users/'

export const EndPoints = {
    createTasks: ':user_id/tasks',
    listTasks: ':user_id/tasks',
    fetchTask: ':user_id/tasks/:id',
    updateTask: ':user_id/tasks/:id',
    deleteTask: ':user_id/tasks/:id',
    completeTask: ':user_id/tasks/:id/completed',
    uncompleteTask: ':user_id/tasks/:id/uncompleted'
}


export const getCombinedUrl = (key, userId) => {
    if (userId) {
        const pKeys = Object.keys(userId);
        pKeys.forEach(i => {
            key = key.replaceAll(`:${i}`, userId[i])
        });
    }
    return BaseUrl + key;
}