import classes from './styles/PetDetail.module.css';

function PetDetail({ icon, title, text, boolean }) {
  let renderedText;

  // if {text} is an array, then render it to be an address over multiple lines
  // else, just render it as a <p>
  if (!text) {
    renderedText = <p></p>;
  } else if (typeof text === 'object') {
    renderedText = (
      <div className={classes.text}>
        {Object.keys(text).map((line) => {
          if (!text[line]) return <></>;
          console.log(line);
          return <p key={line}>{text[line]}</p>;
        })}
      </div>
    );
  } else if (boolean) {
    renderedText = <p className={classes.text}>{text ? 'Yes' : 'No'}</p>;
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
