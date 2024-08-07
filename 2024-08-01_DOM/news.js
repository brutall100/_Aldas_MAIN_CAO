let contentElement = document.querySelector('#content');

let containerElement = document.createElement('div');
containerElement.classList.add('container');
contentElement.append(containerElement);

let pageContentElement = document.createElement('div');
pageContentElement.classList.add('page-content');
containerElement.append(pageContentElement);

// MAIN
let mainElement = document.createElement('main');
pageContentElement.append(mainElement);

let h1Element = document.createElement('h1');
h1Element.classList.add('page-title');
h1Element.textContent = 'Naujienos';
mainElement.append(h1Element);

// News section
let newsSectionElement = document.createElement('section');
newsSectionElement.classList.add('news-section');
mainElement.append(newsSectionElement);

let mainNewsElement = document.createElement('div');
mainNewsElement.classList.add('main-news');
newsSectionElement.append(mainNewsElement);

for (let i = 0; i < 2; i++) {
    let newsItemElement = document.createElement('div');
    newsItemElement.classList.add('news-item');
    mainNewsElement.append(newsItemElement);

    let linkElementA = document.createElement('a');
    linkElementA.setAttribute('href', '#');
    newsItemElement.append(linkElementA);

    let divInsideLinkElement = document.createElement('div');
    divInsideLinkElement.classList.add('news-item-image-wrapper');
    linkElementA.append(divInsideLinkElement);

    let imgElement = document.createElement('img');
    imgElement.classList.add('news-item-image');
    imgElement.setAttribute('src', 'https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png');
    imgElement.setAttribute('alt', '');
    divInsideLinkElement.append(imgElement);

    let newsItemContentElement = document.createElement('div');
    newsItemContentElement.classList.add('news-item-content');
    linkElementA.append(newsItemContentElement);

    let categoryElement = document.createElement('span');
    categoryElement.classList.add('news-item-category');
    categoryElement.textContent = 'Sėkmės istorija';
    newsItemContentElement.append(categoryElement);

    let newsItemTitleElement = document.createElement('h2');
    newsItemTitleElement.classList.add('news-item-title');
    newsItemTitleElement.textContent = 'Sėkmės istorija – įsidarbinimas į Asteri';
    newsItemContentElement.append(newsItemTitleElement);

    let newsItemDateElement = document.createElement('span');
    newsItemDateElement.classList.add('news-item-date');
    newsItemDateElement.textContent = '2024-05-23';
    newsItemContentElement.append(newsItemDateElement);
}

let secondaryNewsElement = document.createElement('div');
secondaryNewsElement.classList.add('secondary-news');
newsSectionElement.append(secondaryNewsElement);

for (let i = 0; i < 4; i++) {
    let newsItemElement = document.createElement('div');
    newsItemElement.classList.add('news-item');
    secondaryNewsElement.append(newsItemElement);

    let linkElementA = document.createElement('a');
    linkElementA.setAttribute('href', '#');
    newsItemElement.append(linkElementA);

    let divInsideLinkElement = document.createElement('div');
    divInsideLinkElement.classList.add('news-item-image-wrapper');
    linkElementA.append(divInsideLinkElement);

    let imgElement = document.createElement('img');
    imgElement.classList.add('news-item-image');
    imgElement.setAttribute('src', 'https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png');
    imgElement.setAttribute('alt', '');
    divInsideLinkElement.append(imgElement);

    let newsItemContentElement = document.createElement('div');
    newsItemContentElement.classList.add('news-item-content');
    linkElementA.append(newsItemContentElement);

    let categoryElement = document.createElement('span');
    categoryElement.classList.add('news-item-category');
    categoryElement.textContent = 'Sėkmės istorija';
    newsItemContentElement.append(categoryElement);

    let newsItemTitleElement = document.createElement('h2');
    newsItemTitleElement.classList.add('news-item-title');
    newsItemTitleElement.textContent = 'Sėkmės istorija – įsidarbinimas į Asteri';
    newsItemContentElement.append(newsItemTitleElement);

    let newsItemDateElement = document.createElement('span');
    newsItemDateElement.classList.add('news-item-date');
    newsItemDateElement.textContent = '2024-05-23';
    newsItemContentElement.append(newsItemDateElement);
}

let largeLinkElement = document.createElement('a');
largeLinkElement.classList.add('large-link');
largeLinkElement.setAttribute('href', '#');
largeLinkElement.textContent = 'Visos naujienos';
newsSectionElement.append(largeLinkElement);

// Video section
let videoSectionElement = document.createElement('section');
videoSectionElement.classList.add('video-section');
mainElement.append(videoSectionElement);

let videoSectionTitleElement = document.createElement('h2');
videoSectionTitleElement.classList.add('section-title');
videoSectionTitleElement.textContent = 'Vaizdo įrašai';
videoSectionElement.append(videoSectionTitleElement);

let videoListElement = document.createElement('div');
videoListElement.classList.add('video-list');
videoSectionElement.append(videoListElement);

for (let i = 0; i < 3; i++) {
    let videoWrapperElement = document.createElement('div');
    videoWrapperElement.classList.add('video-wrapper');
    videoListElement.append(videoWrapperElement);

    let videoTitleElement = document.createElement('h3');
    videoTitleElement.classList.add('video-title');
    videoTitleElement.textContent = '#6 Studentės istorija: sėkmė slypi disciplinoje';
    videoWrapperElement.append(videoTitleElement);

    let iframeElement = document.createElement('iframe');
    iframeElement.width = '560';
    iframeElement.height = '315';
    iframeElement.src = 'https://www.youtube.com/embed/Rz6bswWbPqw?si=0Je3Y085kS2QibIg';
    iframeElement.title = 'YouTube video player';
    iframeElement.frameBorder = '0';
    iframeElement.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframeElement.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    iframeElement.allowFullscreen = true;
    videoWrapperElement.append(iframeElement);
}

let videoLargeLinkElement = document.createElement('a');
videoLargeLinkElement.classList.add('large-link');
videoLargeLinkElement.setAttribute('href', '#');
videoLargeLinkElement.textContent = 'Visi video';
videoSectionElement.append(videoLargeLinkElement);

// ASIDE
let asideElement = document.createElement('aside');
pageContentElement.append(asideElement);

// Podcasts section
let podcastsSectionElement = document.createElement('section');
podcastsSectionElement.classList.add('podcasts-section');
asideElement.append(podcastsSectionElement);

let podcastsTitleElement = document.createElement('h2');
podcastsTitleElement.classList.add('section-title');
podcastsTitleElement.textContent = 'Podcastai ir radijo laidos';
podcastsSectionElement.append(podcastsTitleElement);

let podcastsListElement = document.createElement('div');
podcastsListElement.classList.add('podcasts-list');
podcastsSectionElement.append(podcastsListElement);

for (let i = 0; i < 4; i++) {
    let podcastItemElement = document.createElement('div');
    podcastItemElement.classList.add('podcast-item');
    podcastsListElement.append(podcastItemElement);

    let podcastControlsElement = document.createElement('div');
    podcastControlsElement.classList.add('podcast-controls');
    podcastItemElement.append(podcastControlsElement);

    let podcastImageElement = document.createElement('img');
    podcastImageElement.classList.add('podcast-image');
    podcastImageElement.setAttribute('src', 'https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png');
    podcastImageElement.setAttribute('alt', '');
    podcastControlsElement.append(podcastImageElement);

    let podcastLengthElement = document.createElement('span');
    podcastLengthElement.classList.add('podcast-length');
    podcastLengthElement.textContent = 'Trukmė: 7:55';
    podcastControlsElement.append(podcastLengthElement);

    let podcastPlayButton = document.createElement('button');
    podcastPlayButton.classList.add('podcast-play');
    podcastPlayButton.textContent = 'Play';
    podcastControlsElement.append(podcastPlayButton);

    let podcastContentElement = document.createElement('div');
    podcastContentElement.classList.add('podcast-content');
    podcastItemElement.append(podcastContentElement);

    let podcastTitleElement = document.createElement('h3');
    podcastTitleElement.classList.add('podcast-title');
    podcastTitleElement.textContent = 'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas';
    podcastContentElement.append(podcastTitleElement);

    let podcastDateElement = document.createElement('span');
    podcastDateElement.classList.add('podcast-date');
    podcastDateElement.textContent = '2021-09-02';
    podcastContentElement.append(podcastDateElement);
}

// Events section
let eventsSectionElement = document.createElement('section');
eventsSectionElement.classList.add('events-section');
asideElement.append(eventsSectionElement);

let eventsTitleElement = document.createElement('h2');
eventsTitleElement.classList.add('section-title');
eventsTitleElement.textContent = 'Renginiai';
eventsSectionElement.append(eventsTitleElement);

let eventsListElement = document.createElement('div');
eventsListElement.classList.add('events-list');
eventsSectionElement.append(eventsListElement);

for (let i = 0; i < 3; i++) {
    let eventItemElement = document.createElement('div');
    eventItemElement.classList.add('event-item');
    eventsListElement.append(eventItemElement);

    let linkElementA = document.createElement('a');
    linkElementA.setAttribute('href', '#');
    eventItemElement.append(linkElementA);

    let eventItemImageWrapper = document.createElement('div');
    eventItemImageWrapper.classList.add('event-item-image-wrapp');
    linkElementA.append(eventItemImageWrapper);

    let eventImageElement = document.createElement('img');
    eventImageElement.classList.add('event-item-image');
    eventImageElement.setAttribute('src', 'https://codeacademy.lt/wp-content/uploads/2024/06/0530_CA_event-768x432.png');
    eventImageElement.setAttribute('alt', '');
    eventItemImageWrapper.append(eventImageElement);

    let eventItemContentWrapper = document.createElement('div');
    eventItemContentWrapper.classList.add('event-item-content-wrapper');
    linkElementA.append(eventItemContentWrapper);

    let eventDateElement = document.createElement('div');
    eventDateElement.classList.add('event-date');
    eventItemContentWrapper.append(eventDateElement);

    let eventDayElement = document.createElement('span');
    eventDayElement.classList.add('event-day');
    eventDayElement.textContent = '30';
    eventDateElement.append(eventDayElement);

    let eventMonthElement = document.createElement('span');
    eventMonthElement.classList.add('event-month');
    eventMonthElement.textContent = 'Geg';
    eventDateElement.append(eventMonthElement);

    let eventItemContentElement = document.createElement('div');
    eventItemContentElement.classList.add('event-item-content');
    eventItemContentWrapper.append(eventItemContentElement);

    let eventLocationElement = document.createElement('span');
    eventLocationElement.classList.add('event-location');
    eventLocationElement.textContent = 'Upės g. 21, Greenhall 1, 10 aukštas ir Online';
    eventItemContentElement.append(eventLocationElement);

    let eventTitleElement = document.createElement('h3');
    eventTitleElement.classList.add('event-title');
    eventTitleElement.textContent = 'CodeAcademy galimybės verslui';
    eventItemContentElement.append(eventTitleElement);
}

let eventsLargeLinkElement = document.createElement('a');
eventsLargeLinkElement.classList.add('large-link');
eventsLargeLinkElement.setAttribute('href', '#');
eventsLargeLinkElement.textContent = 'Daugiau';
eventsSectionElement.append(eventsLargeLinkElement);












// AI Version 2 
// function createElement(tag, attributes = {}, children = []) {
//     const element = document.createElement(tag);
//     for (const [key, value] of Object.entries(attributes)) {
//         if (key === 'classList') {
//             element.classList.add(...value);
//         } else {
//             element.setAttribute(key, value);
//         }
//     }
//     for (const child of children) {
//         if (typeof child === 'string') {
//             element.appendChild(document.createTextNode(child));
//         } else {
//             element.appendChild(child);
//         }
//     }
//     return element;
// }

// function createNewsItem() {
//     return createElement('div', { classList: ['news-item'] }, [
//         createElement('a', { href: '#' }, [
//             createElement('div', { classList: ['news-item-image-wrapper'] }, [
//                 createElement('img', {
//                     classList: ['news-item-image'],
//                     src: 'https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png',
//                     alt: ''
//                 })
//             ]),
//             createElement('div', { classList: ['news-item-content'] }, [
//                 createElement('span', { classList: ['news-item-category'] }, ['Sėkmės istorija']),
//                 createElement('h2', { classList: ['news-item-title'] }, ['Sėkmės istorija – įsidarbinimas į Asteri']),
//                 createElement('span', { classList: ['news-item-date'] }, ['2024-05-23'])
//             ])
//         ])
//     ]);
// }

// function createVideoItem() {
//     return createElement('div', { classList: ['video-wrapper'] }, [
//         createElement('h3', { classList: ['video-title'] }, ['#6 Studentės istorija: sėkmė slypi disciplinoje']),
//         createElement('iframe', {
//             width: '560',
//             height: '315',
//             src: 'https://www.youtube.com/embed/Rz6bswWbPqw?si=0Je3Y085kS2QibIg',
//             title: 'YouTube video player',
//             frameborder: '0',
//             allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
//             referrerpolicy: 'strict-origin-when-cross-origin',
//             allowfullscreen: 'true'
//         })
//     ]);
// }

// function createPodcastItem() {
//     return createElement('div', { classList: ['podcast-item'] }, [
//         createElement('div', { classList: ['podcast-controls'] }, [
//             createElement('img', {
//                 classList: ['podcast-image'],
//                 src: 'https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png',
//                 alt: ''
//             }),
//             createElement('span', { classList: ['podcast-length'] }, ['Trukmė: 7:55']),
//             createElement('button', { classList: ['podcast-play'] }, ['Play'])
//         ]),
//         createElement('div', { classList: ['podcast-content'] }, [
//             createElement('h3', { classList: ['podcast-title'] }, ['Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas']),
//             createElement('span', { classList: ['podcast-date'] }, ['2021-09-02'])
//         ])
//     ]);
// }

// function createEventItem() {
//     return createElement('div', { classList: ['event-item'] }, [
//         createElement('a', { href: '#' }, [
//             createElement('div', { classList: ['event-item-image-wrapp'] }, [
//                 createElement('img', {
//                     classList: ['event-item-image'],
//                     src: 'https://codeacademy.lt/wp-content/uploads/2024/06/0530_CA_event-768x432.png',
//                     alt: ''
//                 })
//             ]),
//             createElement('div', { classList: ['event-item-content-wrapper'] }, [
//                 createElement('div', { classList: ['event-date'] }, [
//                     createElement('span', { classList: ['event-day'] }, ['30']),
//                     createElement('span', { classList: ['event-month'] }, ['Geg'])
//                 ]),
//                 createElement('div', { classList: ['event-item-content'] }, [
//                     createElement('span', { classList: ['event-location'] }, ['Upės g. 21, Greenhall 1, 10 aukštas ir Online']),
//                     createElement('h3', { classList: ['event-title'] }, ['CodeAcademy galimybės verslui'])
//                 ])
//             ])
//         ])
//     ]);
// }

// let contentElement = document.querySelector('#content');

// contentElement.append(
//     createElement('div', { classList: ['container'] }, [
//         createElement('div', { classList: ['page-content'] }, [
//             createElement('main', {}, [
//                 createElement('h1', { classList: ['page-title'] }, ['Naujienos']),
//                 createElement('section', { classList: ['news-section'] }, [
//                     createElement('div', { classList: ['main-news'] }, [createNewsItem(), createNewsItem()]),
//                     createElement('div', { classList: ['secondary-news'] }, [createNewsItem(), createNewsItem(), createNewsItem(), createNewsItem()]),
//                     createElement('a', { classList: ['large-link'], href: '#' }, ['Visos naujienos'])
//                 ]),
//                 createElement('section', { classList: ['video-section'] }, [
//                     createElement('h2', { classList: ['section-title'] }, ['Vaizdo įrašai']),
//                     createElement('div', { classList: ['video-list'] }, [createVideoItem(), createVideoItem(), createVideoItem()]),
//                     createElement('a', { classList: ['large-link'], href: '#' }, ['Visi video'])
//                 ])
//             ]),
//             createElement('aside', {}, [
//                 createElement('section', { classList: ['podcasts-section'] }, [
//                     createElement('h2', { classList: ['section-title'] }, ['Podcastai ir radijo laidos']),
//                     createElement('div', { classList: ['podcasts-list'] }, [createPodcastItem(), createPodcastItem(), createPodcastItem(), createPodcastItem()])
//                 ]),
//                 createElement('section', { classList: ['events-section'] }, [
//                     createElement('h2', { classList: ['section-title'] }, ['Renginiai']),
//                     createElement('div', { classList: ['events-list'] }, [createEventItem(), createEventItem(), createEventItem()]),
//                     createElement('a', { classList: ['large-link'], href: '#' }, ['Daugiau'])
//                 ])
//             ])
//         ])
//     ])
// );
