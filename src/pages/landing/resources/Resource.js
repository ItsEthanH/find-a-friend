import { useSelector } from 'react-redux';

import Heading from '../../../components/text/Heading';

import classes from './styles/Resource.module.css';

function Resource(props) {
  const windowWidth = useSelector((state) => state.ui.windowWidth);

  let alignmentStyles = props.right ? classes.right : classes.left;
  if (windowWidth >= 1000) {
    alignmentStyles = props.left;
  }

  return (
    <div className={`${classes.resource} ${alignmentStyles}`}>
      <div className={classes.highlight} />
      <Heading>{props.title}</Heading>
      <p>{props.body}</p>
      <a href={props.link}>{props.linkText}</a>
    </div>
  );
}

export default Resource;
