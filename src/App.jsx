import { useRoutes } from 'react-router-dom';
import routers from './router';
import { Suspense } from 'react';
import { CircularProgress } from '@mui/material';
function App() {
    const element = useRoutes(routers);

    return (
        <>
            <Suspense fallback={<CircularProgress />}>{element}</Suspense>
        </>
    );
}

export default App;
