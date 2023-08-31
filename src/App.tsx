import { AppRoutes } from './pages';

import './styles/index.scss';

const App = (): JSX.Element => {
    return (
        <div className="app">
            <AppRoutes />
        </div>
    );
};

export default App;