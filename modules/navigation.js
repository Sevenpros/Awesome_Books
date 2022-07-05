export default class Navigation {
  constructor(id, target) {
    this.id = id;
    this.target = target;
  }

  setLinkActive() {
    const navItems = document.querySelectorAll('.navbar ul li a');
    navItems.forEach((item) => {
      if (item.id === this.id) item.classList.add('active');
      else item.classList.remove('active');
    });
  }

  setArticleVisible() {
    const articles = document.querySelectorAll('article');
    articles.forEach((article) => {
      if (article.id === this.target) article.classList.remove('invisible');
      else article.classList.add('invisible');
    });
  }

  showNavigation() {
    this.setLinkActive();
    this.setArticleVisible();
  }
}
