import classes from './styles/Hero.module.css';

function Hero(props) {
  let background;

  switch (props.page) {
    case 'SEARCH_ALL':
      background = classes.searchall;
      break;

    default:
      background = classes.landing;
      break;
  }

  let styles = `${classes.hero} ${background}`;

  return <section className={styles}>{props.children}</section>;
}

export default Hero;
