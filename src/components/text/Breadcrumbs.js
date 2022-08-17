import { Link } from 'react-router-dom';

import classes from './styles/Breadcrumbs.module.css';

function Breadcrumbs(props) {
  const renderedBreadcrumbs = props.breadcrumbs.map((item, index) => (
    <div className={classes.breadcrumbs} aria-label="breadcrumbs">
      <Link key={item.link} to={item.link}>
        {item.text}
      </Link>
      {index === props.breadcrumbs.length - 1 ? '' : <p> &gt; </p>}
    </div>
  ));

  return <div className={classes.breadcrumbs}>{renderedBreadcrumbs}</div>;
}

export default Breadcrumbs;
