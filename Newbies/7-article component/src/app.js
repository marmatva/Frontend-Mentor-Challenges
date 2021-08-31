const shareButton = document.querySelector('.primary-share-button');
// const secondaryShareButton = document.querySelector('.secondary-share-button');

const sharingLinksDiv = document.querySelector('.share-social-media');

shareButton.onclick=displaySharingLinks;
// secondaryShareButton.onclick=displaySharingLinks;

function displaySharingLinks(){
    sharingLinksDiv.classList.toggle('display-none');
    shareButton.classList.toggle('higher-zindex');
}
