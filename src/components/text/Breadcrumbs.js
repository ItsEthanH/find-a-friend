import { Link } from 'react-router-dom';

import classes from './styles/Breadcrumbs.module.css';

function Breadcrumbs(props) {
  const renderedBreadcrumbs = props.breadcrumbs.map((item, index) => {
    const isLastRendered = index === props.breadcrumbs.length - 1;

    return (
      <div key={item.link} className={classes.breadcrumbs} aria-label="breadcrumbs">
        {isLastRendered && <p>{item.text}</p>}
        {!isLastRendered && <Link to={item.link}>{item.text}</Link>}
        {isLastRendered ? '' : <p> &gt; </p>}
      </div>
    );
  });

  return <div className={classes.breadcrumbs}>{renderedBreadcrumbs}</div>;
}

export default Breadcrumbs;
