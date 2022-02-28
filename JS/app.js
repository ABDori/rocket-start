
/* проверка на загрузку контента */
document.addEventListener('DOMContentLoaded',() => {

      /* подложка для всплывающего меню */
      document.querySelector('.menu__btn').addEventListener('click',function (e) {
            e.preventDefault();
            document.querySelector('.menu__inner').classList.toggle('active');
            document.querySelector('body').classList.toggle('fixed');
      });




/* запускаю считывание попадания в экран */

      const main = document.querySelectorAll('.main');

      const options = {
            root: null,
            threshold: 0.5,
      };


      const observer = new IntersectionObserver(function (entries,observer) {
            entries.forEach(entry => {
                  if (!entry.isIntersecting) {
                        entry.target.classList.add('covered');
                        return;
                  }
                  entry.target.classList.add('animated');
                  entry.target.classList.remove('covered');
            });
      },options);

      main.forEach(main => {
            observer.observe(main);

      });

});