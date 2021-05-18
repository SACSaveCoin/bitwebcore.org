import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { handleHash } from '../../helpers/Hash';

function ScrollTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen((request, type) => {
      if (type === 'POP') {
        if (!window.location.hash) {
          setTimeout(() => {
            window.scrollTo(0, window.scrollY + 1);
          }, 16 + 1);
        }
        return;
      }
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}



export default withRouter(ScrollTop);