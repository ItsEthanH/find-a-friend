import classes from './styles/Hero.module.css';

// The hero component used on the navigation pages. Configured using the "page" prop
// Setting the page via props allows the hero image and (optional) styles to be controlled centrally
function Hero(props) {
  let backgroundStyles;

  switch (props.page) {
    case 'ANIMALS':
      backgroundStyles = classes.animals;
      break;

    case 'ORGANISATIONS':
      backgroundStyles = classes.organisations;
      break;

    case 'DOGS':
      backgroundStyles = classes.dogs;
      break;

    case 'CATS':
      backgroundStyles = classes.cats;
      break;

    default:
      backgroundStyles = classes.landing;
      break;
  }

  let styles = `${classes.hero} ${backgroundStyles}`;

  return (
    <section id={props.id} data-testid="hero" className={styles}>
      {props.children}
    </section>
  );
}

export default Hero;
