export default class Endpoints {
    static baseEndpoint = 'https://kebab-master.azurewebsites.net'
    static loginEndpoint = `${this.baseEndpoint}/authorization/login`;
    static usersEndpoint = `${this.baseEndpoint}/users`;
    static ordersEndpoint = `${this.baseEndpoint}/orders`;
    static menuEndpoint = `${this.baseEndpoint}/menu`
}