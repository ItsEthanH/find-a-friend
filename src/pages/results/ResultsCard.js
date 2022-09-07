import { Link, useLocation } from 'react-router-dom';

import Card from '../../components/cards-and-sections/Card';

import classes from './styles/ResultsCard.module.css';

function ResultsCard(props) {
  const location = useLocation();

  return (
    <Card key={props.id} styles={classes.card}>
      <div className={classes.image}>
        <img src={props.image} alt="" />
      </div>
      <div className={classes.text}>
        <h4>{props.name}</h4>
        <p>{props.breed}</p>
        <div className={classes.location}>
          {props.distance && (
            <>
              <p>{props.distance} miles</p>
              <div className={classes.divider} />
            </>
          )}
          <p>
            {props.city}, {props.state}
          </p>
        </div>
      </div>
      <Link
        className={classes.button}
        to={`/animal/${props.id}`}
        state={{ from: 'RESULTS', path: location.pathname }}
      >
        View my Profile!
      </Link>
    </Card>
  );
}

export default ResultsCard;
