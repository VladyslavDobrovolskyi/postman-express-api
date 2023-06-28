const preRequestScripts = () => {
    if (!pm.environment.get('Testing')) {
        throw new Error('Пользователь не прошел регистрацию')
    }
}

const Tests = () => {
    const resUser = pm.response.json()
    const testUser = JSON.parse(pm.environment.get(`USER`))

    pm.test('Проверка id', function () {
        let idCheck = false

        if (resUser._id === pm.environment.get('testUserId')) {
            idCheck = true
        }

        pm.expect(
            idCheck,
            '{_id} пользователя, который был найден, не совпадает с данными зарегистрированого пользователя'
        ).to.be.true
    })

    pm.test('Проверка имени', function () {
        let firstNameCheck = false

        if (resUser.firstName === testUser.firstName) {
            firstNameCheck = true
        }

        pm.expect(
            firstNameCheck,
            '{fisrtName} пользователя, который был найден, не совпадает с данными зарегистрированого пользователя'
        ).to.be.true
    })
    pm.test('Проверка фамилии', function () {
        let secondNameCheck = false

        if (resUser.secondName === testUser.secondName) {
            secondNameCheck = true
        }

        pm.expect(
            secondNameCheck,
            '{secondName} пользователя, который был найден, не совпадает с данными зарегистрированого пользователя'
        ).to.be.true
    })
    pm.test('Проверка номера телефона', function () {
        let phoneNumberCheck = false

        if (resUser.phoneNumber === testUser.phoneNumber) {
            phoneNumberCheck = true
        }

        pm.expect(
            phoneNumberCheck,
            '{phoneNumber} пользователя, который был найден, не совпадает с данными зарегистрированого пользователя'
        ).to.be.true
    })
    pm.test('Проверка email', function () {
        let emailAddressCheck = false

        if (resUser.emailAddress === testUser.emailAddress) {
            emailAddressCheck = true
        }

        pm.expect(
            emailAddressCheck,
            '{emailAddress} пользователя, который был найден, не совпадает с данными зарегистрированого пользователя'
        ).to.be.true
    })
}
