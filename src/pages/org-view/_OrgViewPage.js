import OrgMap from './OrgMap';

import classes from './styles/OrgViewPage.module.css';

function _OrgViewPage(props) {
  return (
    <main className={classes.main}>
      <OrgMap address="The White House, USA" />
    </main>
  );
}

export default _OrgViewPage;
