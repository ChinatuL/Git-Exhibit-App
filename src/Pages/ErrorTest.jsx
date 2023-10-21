import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../Components/ErrorFallback";
const ErrorTest = () => {
    return (
        <div className='not-found'>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Navigation />
            </ErrorBoundary>
        </div>
    );
};
export default ErrorTest;
