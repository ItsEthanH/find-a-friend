import classes from './styles/PetDetail.module.css';

function PetDetail({ icon, title, text }) {
  let renderedText;

  // if {text} is an array, then render it to be an address over multiple lines
  // else, just render it as a <p>
  if (Array.isArray(text)) {
    renderedText = (
      <div className={classes.text}>
        {text.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    );
  } else {
    renderedText = <p className={classes.text}>{text}</p>;
  }

  return (
    <div className={classes.detail}>
      <div className={classes.image}>
        <img src={icon} alt={title} />
      </div>
      <p className={classes.title}>{title}</p>
      {renderedText}
    </div>
  );
}

export default PetDetail;
