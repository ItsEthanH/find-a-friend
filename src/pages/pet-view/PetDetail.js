import classes from './styles/PetDetail.module.css';

function PetDetail({ icon, title, text }) {
  let renderedText;

  // if the value is a boolean, return yes/no
  // if the value is a string or number, return the face value
  // if the value is an array, it must be the address field, which has been formatted in PetViewPage. render each line as a paragraph
  // otherwise, who knows? render unknown

  if (typeof text === 'boolean') {
    renderedText = text ? <p>Yes</p> : <p>Yes</p>;
  } else if (typeof text === 'string' || typeof text === 'number') {
    renderedText = <p>{text}</p>;
  } else if (Array.isArray(text)) {
    renderedText = (
      <div>
        {text.map((line) => (
          <p>{line}</p>
        ))}
      </div>
    );
  } else {
    renderedText = <p>Unknown</p>;
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
