export default class MyHttpService {
    getUser() {
        return Promise.resolve({user: 'Girija'});
    }
}