import CardImg from './img/flexible-1.jpg';

function App() {
  return (
    <div>
      <div className='cards'>
        <article className='card card--1'>
          <div className='card__info--hover'>
            {/* <svg class='card__like' viewbox='0 0 24 24'>
              <path
                fill='#000000'
                d='M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z'
              />
            </svg> */}
          </div>

          <div className='card__img'></div>
          <a href='#' className='card__link'>
            <div className='card__img--hover'></div>
          </a>
          <div className='card__info'>
            <span className='card__category'>Recipe</span>
            <h3 className='card__title'>Title goes here</h3>
            <span className='card__by'>
              by{' '}
              <a href='' className='card__author' title='author'>
                {' '}
                Gilbert Haro
              </a>{' '}
            </span>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
