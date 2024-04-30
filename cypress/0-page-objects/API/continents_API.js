export class ContinentsAPI {
    request(graphqlQuery) {
        return cy.request({
            method: 'POST',
            url: 'https://countries.trevorblades.com/graphql',
            body: graphqlQuery
        })
    }

    validateContinentsDefault(response) {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('data')
        expect(response.body.data).to.have.property('continents')
        expect(response.body.data.continents).to.be.an('array').that.is.not
            .empty
    }

    validateContinents(response, expectedContinents) {
        this.validateContinentsDefault(response)

        response.body.data.continents.forEach(continent => {
            expect(continent).to.have.all.keys('code', 'name')
            expectedContinents.forEach(expectedContinent => {
                expect(response.body.data.continents).to.deep.include(
                    expectedContinent
                )
            })
        })
    }

    validateContinentsCountries(response) {
        this.validateContinentsDefault(response)

        response.body.data.continents.forEach(continent => {
            expect(continent).to.have.all.keys('code', 'name', 'countries')
            expect(continent.countries).to.be.an('array').that.is.not.empty
            continent.countries.forEach(country => {
                expect(country).to.have.all.keys(
                    'code',
                    'name',
                    'capital',
                    'currency',
                    'awsRegion'
                )
            })
        })
    }

    validateContinentDefault(response) {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('data')
        expect(response.body.data).to.have.property('continent')
    }

    validateContinent(response, expectedContinent) {
        this.validateContinentDefault(response)

        expect(response.body.data.continent).to.have.all.keys('code', 'name')
        expect(response.body.data.continent).to.deep.equal(expectedContinent)
    }

    validateContinentCountries(response) {
        this.validateContinentDefault(response)

        expect(response.body.data.continent).to.have.all.keys(
            'code',
            'name',
            'countries'
        )
        expect(response.body.data.continent.countries).to.be.an('array').that.is
            .not.empty
        response.body.data.continent.countries.forEach(country => {
            expect(country).to.have.all.keys(
                'code',
                'name',
                'capital',
                'currency',
                'awsRegion'
            )
        })
    }
}
