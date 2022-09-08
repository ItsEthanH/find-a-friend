import Header from './header/Header';
import Footer from './footer/Footer';

import LoadingSpinner from '../assets/svgs/loading.svg';

function SuspenseComponent(props) {
  return (
    <main className="suspense">
      <Header />
      <img className="suspense-spinner" src={LoadingSpinner} alt="Loading..." />
      <Footer />
    </main>
  );
}

export default SuspenseComponent;
