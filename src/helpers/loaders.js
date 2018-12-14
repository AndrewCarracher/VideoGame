class Loader {
  constructor(name){
    let url = this.loadLevel(name);
    this.loadImage(url);
  }

  loadImage(url) {
      return new Promise(resolve => {
          const image = new Image();
          image.addEventListener('load', () => {
              resolve(image);
            });
            image.src = url;
          });
        }

  loadLevel(name) {
    return fetch(`/levels/${name}.json`)
    .then(r => r.json());
  }
}

export default Loader;
