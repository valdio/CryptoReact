class Api {
    static headers() {
        return {
            //Configure request headers if needed
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'dataType': 'json',
        }
    }

    static get(route) {
        return this.xhr(route, null, 'GET')
    }

    static put(route, params) {
        return this.xhr(route, params, 'PUT')
    }

    static post(route, params) {
        return this.xhr(route, params, 'POST')
    }

    static delete(route, params) {
        return this.xhr(route, params, 'DELETE')
    }

    static xhr(route, params, verb) {
        const host = 'https://api.coinmarketcap.com'
        const url = `${host}${route}`
        let options = Object.assign({method: verb}, params ? {body: JSON.stringify(params)} : null)
        options.headers = Api.headers()

        return fetch(url, options)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson
            })
            .catch((error) => {
                throw error
            })
    }
}

export default Api