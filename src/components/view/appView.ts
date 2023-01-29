import News from './news/news';
import Sources from './sources/sources';

interface NewsItem {
    urlToImage: string;
    author: string;
    publishedAt: string;
    title: string;
    source: {
        name: string;
    };
    description: string;
    url: string;
}

interface SourceItem {
    id: string;
    name: string;
}

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: { articles: NewsItem[] }) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: { sources: SourceItem[] }) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
