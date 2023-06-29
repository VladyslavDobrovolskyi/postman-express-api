const URI = `{{host}}/users/{{testUserId}}`
const method = 'PUT'

const preRequestScripts = () => {
    const updateData = {
        firstName: 'Обновлен',
        secondName: 'Обновленович',
        phoneNumber: '+380000000000',
        emailAddress: 'updated@mail.org',
    }

    pm.request.headers.add({
        key: 'Content-Type',
        value: 'application/json',
    })

    pm.request.body = {
        mode: 'raw',
        raw: updateData,
    }

    pm.environment.set(`USER`, JSON.stringify(updateData))
}

const Tests = () => {}
