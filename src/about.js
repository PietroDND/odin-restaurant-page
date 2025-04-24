export const loadAbout = () => {
    const content = document.createElement('div');
    content.id = 'content';

    //About section
    const container = document.createElement('div');
    container.classList.add('about-container');
    const title = document.createElement('h2');
    title.classList.add('about-title');
    title.textContent = 'About us';
    const info = document.createElement('p');
    info.classList.add('about-info');
    info.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum ligula vel felis hendrerit tristique. Duis est diam, interdum id magna sed, sollicitudin pretium neque. Integer ullamcorper leo non tortor dapibus pharetra. Vivamus non accumsan nisi. Aenean dictum condimentum dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam dolor magna, sodales in finibus at, facilisis in elit. Nunc id molestie neque. Suspendisse at venenatis arcu, nec vestibulum lacus. Maecenas libero dolor, ultricies vitae metus non, porta aliquet diam. Pellentesque sodales nisl in leo ornare, quis vestibulum tortor finibus. Praesent nisi ex, euismod at ex non, tincidunt convallis mauris. Nam rhoncus augue quis augue maximus, vehicula convallis leo cursus. Proin mattis elit vel sem malesuada auctor. In elementum tristique magna, sed gravida orci vehicula id. Nunc sit amet urna sapien. ';
    container.append(title, info);
    content.appendChild(container);
    return content;
};