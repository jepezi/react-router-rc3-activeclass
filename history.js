import { useBasename } from 'history'
import createBrowserHistory from 'history/lib/createBrowserHistory';

export default useBasename(createBrowserHistory)({ basename: '/website' });
// export default createBrowserHistory()