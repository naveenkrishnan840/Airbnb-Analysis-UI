



export const RequestService = (path, method, data) => {
    const header_data = {
        'Content-Type': 'application/json'
    }
    if (localStorage.getItem("token")){
        header_data["Authorization"] = `Bearer ${localStorage.getItem("token")}`
    }
    var body = JSON.stringify(data) 
    var path = `${process.env.REACT_APP_API_URL}${path}`
    return fetch(path, {
        method: method,
        headers: header_data,
        body: body
    }).then(res => res.json())
}

// console.log(RequestService)

