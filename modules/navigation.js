const navItems = document.querySelectorAll('.navbar ul li a');
const articles = document.querySelectorAll('article');

const showNavigation = (id, target) => {   
   setLinkActive(id);
   setArticleVisible(target);   
}

const setLinkActive = id => {
    navItems.forEach(item => {
        if(item.id === id) item.classList.add('active');
        else item.classList.remove('active');
    })
}

const setArticleVisible = target => {
    articles.forEach(article => {
        if(article.id === target) article.classList.remove('invisible');
        else article.classList.add('invisible');
    })
}
export {showNavigation};
