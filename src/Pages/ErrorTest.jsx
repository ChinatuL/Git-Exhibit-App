import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../Components/ErrorFallback";
import Pagination from "../Components/Pagination";
const ErrorTest = () => {
    return (
        <div className='not-found'>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Pagination />
            </ErrorBoundary>
        </div>
    );
};
export default ErrorTest;
