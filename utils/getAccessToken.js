const axios = require('axios')
const { createHash } = require('crypto')

module.exports.getAccessToken = (email, password) => {
    password = createHash('sha256').update(password).digest('hex')

    const data = {
        operationName: 'CreateAccessToken',
        variables: { email, password },
        query: `mutation CreateAccessToken($email: String!, $password: String!) {
                    createAccessToken(email: $email, password: $password) {
                        result
                        accessToken
                        __typename
                    }
                }`
    }

    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        data: data,
        url: `https://graphql-gateway.axieinfinity.com/graphql`
    }

    return axios(options)
        .then(({ data: response }) => response?.data?.createAccessToken?.accessToken)
        .catch(error => console.error(error))
}