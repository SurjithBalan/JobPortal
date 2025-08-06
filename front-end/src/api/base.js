import apiClient from "./apiClient";

export async function getData(url) {
    const response = { data: {}, error: '' };
    await apiClient
        .get(url)
        .then((res) => {
            if (res.status === 200) {
                response['data'] = res.data;
            }
        })
        .catch((error) => {
            response.error = error.response.data.message;
        });
    return response;
}

export async function putData(url, data) {
    const response = { data: {}, error: '' };
    await apiClient
        .put(url, data)
        .then((res) => {
            if (res.status === 201) {
                response['data'] = res.data;
            }
        })
        .catch((error) => {
            response.error = error.response.data.message;
        });
    return response;
}

export async function postData(url, data) {
    const response = { data: {}, error: '' };
    await apiClient
        .post(url, data)
        .then((res) => {
            if (res.status === 201) {
                response['data'] = res.data;
            }
        })
        .catch((error) => {
            response.error = error.response.data.message;
        });
    return response;
}
export async function deleteData(url) {
    const response = { data: {}, error: '' };
    await apiClient
        .delete(url)
        .then((res) => {
            if (res.status === 204) {
                response['data'] = res.data;
            }
        })
        .catch((error) => {
            response.error = error.response.data.message;
        });
    return response;
}