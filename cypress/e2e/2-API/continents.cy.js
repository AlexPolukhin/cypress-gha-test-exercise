/// <reference types="cypress"/>

import { ContinentsAPI } from '../../0-page-objects/API/continents_API';

describe('Continents Query', () => {

    const continents_API = new ContinentsAPI();

    context('Continents', () => {

        it('should return continents with their codes and names', () => {

            const expectedContinents = [
                { code: 'AF', name: 'Africa' },
                { code: 'AN', name: 'Antarctica' },
                { code: 'AS', name: 'Asia' },
                { code: 'EU', name: 'Europe' },
                { code: 'NA', name: 'North America' },
                { code: 'OC', name: 'Oceania' },
                { code: 'SA', name: 'South America' },
              ];
    
            const graphqlQuery = {
                query: `
                {
                    continents {
                        code
                        name
                    }
                }
                `,
            };
        
            continents_API.request(graphqlQuery).then((response) => {

                continents_API.validateContinents(response, expectedContinents);
                                      
            });
        });
    
        it('should return continents by code, name, countries', () => {
                    
            const graphqlQuery = {
                query: `
                {
                    continents {
                        code
                        name
                        countries {
                            code
                            name
                            capital
                            currency
                            awsRegion
                        }
                    }
                }
                `,
            };
        
            continents_API.request(graphqlQuery).then((response) => {

                continents_API.validateContinentsCountries(response);
                
            });
        });
    });

    context('Continent', () => {

        it('should return continent by code', () => {

            const expectedContinent = { code: 'AF', name: 'Africa' };
    
            const graphqlQuery = {
                query: `
                {
                    continent(code: "AF") {
                        code
                        name
                    }
                }
                `,
            };
        
            continents_API.request(graphqlQuery).then((response) => {

                continents_API.validateContinent(response, expectedContinent);

            });
        });
    
        it('should return continent by code with countries', () => {
    
            const expectedContinent = { code: 'AF', name: 'Africa' };
    
            const graphqlQuery = {
                query: `
                {
                    continent(code: "AF") {
                        code
                        name
                        countries {
                            code
                            name
                            capital
                            currency
                            awsRegion
                        }
                    }
                }
                `,
            };
        
            cy.request({
                method: 'POST',
                url: 'https://countries.trevorblades.com/graphql',
                body: graphqlQuery
            }).then((response) => {

                continents_API.validateContinentCountries(response);

            });
        });

    });

});
  