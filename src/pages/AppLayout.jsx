import AppNav from '../components/AppNav';
import Sidebar from '../components/Sidebar';
import Map from '../components/Map';
import styles from './AppLayout.module.css';
import User from '../components/User';
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
