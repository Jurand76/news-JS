import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '0f00ac7889cd4ac4814f20da438f69d8', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
