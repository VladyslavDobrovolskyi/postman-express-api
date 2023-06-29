const URI = `{{host}}/users/{{testUserId}}`
const method = 'DELETE'

const preRequestScripts = () => {}

const Tests = () => {
    pm.test('Удаление пользователя', function () {
        pm.response.to.have.status(200)
    })
}
