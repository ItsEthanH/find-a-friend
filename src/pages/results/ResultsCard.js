import Card from '../../components/cards-and-sections/Card';

import classes from './styles/ResultsCard.module.css';

function ResultsCard(props) {
  return (
    <Card styles={classes.card}>
      <div className={classes.image}>
        <img src={props.image} alt="" />
      </div>
      <div className={classes.text}>
        <h4>{props.name}</h4>
        <p>{props.breed}</p>
        <div className={classes.location}>
          <p>{props.distance} miles</p>
          <p>
            {props.city}, {props.state}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default ResultsCard;
