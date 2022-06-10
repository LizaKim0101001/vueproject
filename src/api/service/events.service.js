export default api => {
	api.Users = {
		getAllUsers() {
            return api.instance.request({
                method: 'get',
                url: `/users/all`,
            })
        },
 		postLogin(body){
			return api.instance.request({
                method: 'post',
                url: `/users/login`,
				data : body
            })
		  },
		getFilterUsers(body){
			return api.instance.request({
                method: 'post',
                url: `/users`,
				data : body
            })
		  },
        getOneUsers(id){
            return api.instance.request({
                  method: 'get',
                  url: `/users/${id}`,
              })
      },
        editUser(body){
            return api.instance.request({
                  method: 'put',
                  url: `/users/edit`,
                  data : body
              })
      },
	};
    api.Task = {
        getFilterTasks(body){
            return api.instance.request({
                method: 'post',
                url: `/tasks`,
                data : body
            })
        },
        getOneTask(id){
            return api.instance.request({
                method: 'get',
                url: `/tasks/${id}`,
            })
        },
        deleteTask(id){
            return api.instance.request({
                method: 'delete',
                url: `/tasks/${id}`,
            })
        },
        changeStatus(id, status){
            return api.instance.request({
                method: 'patch',
                url: `/tasks/${id}/status/${status}`
            })
        },
        changeWorktimeTask(id, body){
            return api.instance.request({
                method: 'patch',
                url: `/tasks/${id}/worktime`,
                data: body
            })
        },
        createEditTask(body){
            return api.instance.request({
                method: 'put',
                url: `/tasks/createOrEdit`,
                data: body
            })
        },
    }
    api.Comment ={
      getAllComments(id){
        return api.instance.request({
          method: 'get',
          url: `/comments/${id}`,
      })
      },
      createEditComments(body){
        return api.instance.request({
          method: 'put',
          url: `/comments/createOrEdit`,
          data: body
      })
      },
      deleteComments(id){
        return api.instance.request({
          method: 'delete',
          url: `/comments/${id}`,
      })
      }
    }
}