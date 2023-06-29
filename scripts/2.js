const URI = `{{host}}/users/`
const method = 'POST'

const preRequestScripts = () => {
    if (pm.environment.get('Testing')) {
        let testUser = JSON.parse(pm.environment.get(`USER`))

        pm.request.headers.add({
            key: 'Content-Type',
            value: 'application/json',
        })

        pm.request.body = {
            mode: 'raw',
            raw: {
                firstName: testUser.firstName,
                secondName: testUser.secondName,
                phoneNumber: testUser.phoneNumber,
                emailAddress: testUser.emailAddress,
            },
        }
    } else {
        throw new Error(
            'Пользователь которого вы пытаетесь создать не прошёл проверку на уникальный {emailAddress} или {phoneNumber}'
        )
    }
}

const Tests = () => {
    const createdUser = pm.response.json()
    const curId = createdUser._id
    pm.environment.set('testUserId', curId)

    pm.test(`Создание пользователя ${JSON.stringify(createdUser)} :`, () => {
        if (pm.response.code !== 201) {
            pm.environment.set('Testing', false)
        }
        pm.expect(pm.response.code).to.equal(201)
    })
}
