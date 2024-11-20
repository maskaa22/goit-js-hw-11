//У файлі render-functions.js створи функції для відображення елементів інтерфейсу.

export const renderImages = (images) => {
  //console.log(images);
  
  return images.map(image => `
    <li class='galery-item'>
      <a href=${image.largeImageURL}>
        <img alt=${image.tags} src=${image.webformatURL} class='galery-image'/>
      </a>
      <ul class='list-info'>
        <li class='item-info'>
          <p class='title-info'>Likes</p>
          <p class='count-info'>${image.likes}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Views</p>
          <p class='count-info'>${image.views}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Comments</p>
          <p class='count-info'>${image.comments}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Downloads</p>
          <p class='count-info'>${image.downloads}</p>
        </li>
      </ul>
    </li>
    `).join('');
}
