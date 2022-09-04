import { useNavigate, useLocation } from 'react-router-dom';

import Card from '../../components/cards-and-sections/Card';
import AccentButton from '../../components/buttons-and-inputs/AccentButton';

import classes from './styles/ResultsCard.module.css';

function ResultsCard(props) {
  const location = useLocation();
  const navigate = useNavigate();

  function buttonClickHandler() {
    navigate(`/animal/${props.id}`, { state: { path: location.pathname } });
  }

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
      <AccentButton styles={classes.button} onClick={buttonClickHandler}>
        View my Profile!
      </AccentButton>
    </Card>
  );
}

export default ResultsCard;
