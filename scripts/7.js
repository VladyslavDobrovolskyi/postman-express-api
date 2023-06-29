const URI = `{{host}}/users/{{testUserId}}`
const method = 'GET'

const preRequestScripts = () => {}

const Tests = () => {
    const jsonData = pm.response.json()

    pm.test('Пользователь был успешно удалён', function () {
        pm.response.to.have.status(404)
    })
}
