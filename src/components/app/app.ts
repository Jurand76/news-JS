import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    sources = document.querySelector('.sources');
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        if (this.sources) {
            this.sources.addEventListener('click', (e: any) =>
                this.controller.getNews(e, (data: any) => this.view.drawNews(data))
            );
            this.controller.getSources((data: any) => this.view.drawSources(data));
        }
    }
}

export default App;
