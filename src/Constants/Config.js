// API_NOTIFICATION_MESSAGES


export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: "Loading.....",
        message: 'Data is Being Loaded, Please Wait'
    },
    success: {
        title: 'Success',
        message: 'Data is Successfuly Loaded'
    },
    responseFailure: {
        title: 'Error',
        message: 'An error occured while fetching response from the server,please try again'
    },
    requestFailure: {
        title: 'Error',
        message: 'An error occured while Parsing requested Data'
    },
    networkError: {
        title: 'Error',
        message: 'Unable to connect to the server right now'
    }
}


// API SERVICE CALL
// SAMPLE REQUEST
// NEED SERVICE CALL: {url:'/',method:'POST/GET/UPDATE/DELETE',params:true/false,query:true/false}
export const SERVICE_URLS = {
    adminSignup: { url: '/signup', method: 'POST' },
    registerParticipants: { url: "/register", method: "POST" },
    userSignin: { url: "/signin", method: "POST" },
    getAllParticipants: { url: '/participants', method: "GET", params: true },
    getSearchedParticipants: { url: "/api/participants", method: "GET", params: true },
    getParticipantWithId: { url: "/partwid", method: "GET", params: true },
    registerIndividuals: { url: "/indi/regist", method: "POST" },
    registerGroups: { url: "/group/regist", method: "POST" },
    getAllGroups: { url: "/groups", method: "GET", params: true },
    getParticipantsWithLimit: { url: "/paticipantsData", method: "GET", params: true },
    getAllIndividuals: { url: "/individuals", method: "GET", params: true },



    // DELETE 
    deleteUser:{url:'/user/delete',method:"DELETE" ,query:true},
    deleteGroup:{url:'/group/delete',method:"DELETE" ,query:true},

    // UPDATE
    updateUsers:{url:'/user/update',method:"PUT",params:true},
    updateIndividuals:{url:'/indi/update',method:"PUT",params:true},
    updateGroup:{url:'/group/update',method:"PUT",params:true}

}