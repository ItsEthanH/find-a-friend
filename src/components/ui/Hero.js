import classes from './styles/Hero.module.css';

function Hero(props) {
  let background;

  switch (props.page) {
    case 'ANIMALS':
      background = classes.animals;
      break;

    case 'ORGANISATIONS':
      background = classes.organisations;
      break;

    default:
      background = classes.landing;
      break;
  }

  let styles = `${classes.hero} ${background}`;

  return <section className={styles}>{props.children}</section>;
}

export default Hero;
