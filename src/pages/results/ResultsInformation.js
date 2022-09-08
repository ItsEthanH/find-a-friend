import Breadcrumbs from '../../components/text/Breadcrumbs';
import { useLocation } from 'react-router-dom';

import classes from './styles/ResultsInformation.module.css';

function ResultsInformation(props) {
  const { count } = props;
  const location = useLocation();

  const breadcrumbs = [
    { link: '/', text: 'Home' },
    { link: '/search', text: 'Search Animals' },
    { link: location.pathname, text: 'Results' },
  ];

  return (
    <section className={classes.information}>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <p className={classes.count}>
        We've found <span className="color-accent">{count}</span> results
      </p>
    </section>
  );
}

export default ResultsInformation;
