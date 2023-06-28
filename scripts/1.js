const preRequestScripts = () => {
    const iteratedUser = pm.iterationData.get('USER')
    pm.environment.set('USER', JSON.stringify(iteratedUser))
    pm.environment.set(`Testing`, true)
}

const Tests = () => {
    const jsonData = pm.response.json()
    const testUser = JSON.parse(pm.environment.get(`USER`))

    pm.test('Проверка на уникальный номер телефона', function () {
        let phoneValidation = true

        for (user of jsonData) {
            if (user.phoneNumber == testUser.phoneNumber) {
                phoneValidation = false

                pm.environment.set('Testing', false)
                pm.expect(
                    phoneValidation,
                    'Этот пользователь будет использовать  уже зарезервированные в системе данные, обновите {phoneNumber} пользователя и повторите попытку'
                ).to.be.true
            }
        }
    })

    pm.test('Проверка на уникальный email ', function () {
        let emailValidation = true

        for (user of jsonData) {
            if (user.emailAddress == testUser.emailAddress) {
                emailValidation = false
                pm.environment.set('Testing', false)
                pm.expect(
                    emailValidation,
                    'Этот пользователь будет использовать  уже зарезервированные в системе данные, обновите {emailAddress} пользователя и повторите попытку'
                ).to.be.true
            }
        }
    })
}
