



export const RequestService = (path, method, data) => {
    const header_data = {
        'Content-Type': 'application/json'
    }
    if (localStorage.getItem("token")){
        header_data["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    }
    var body = JSON.stringify(data) 
    var path = `http://127.0.0.1:8001${path}`
    return fetch(path, {
        method: method,
        headers: header_data,
        body: body
    }).then(res => res.json())
}

// console.log(RequestService)

