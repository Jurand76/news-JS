import './sources.css';

interface SourceItem {
    id: string;
    name: string;
}

class Sources {
    draw(data: SourceItem[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLFormElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);

            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources').append(fragment);
    }
}

export default Sources;
