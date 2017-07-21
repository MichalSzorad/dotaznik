import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

if (typeof window !== 'undefined') {
    window.appHistory = history;
}

export default history;