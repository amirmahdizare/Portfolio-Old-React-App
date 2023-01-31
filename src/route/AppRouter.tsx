import { BrowserRouter, Routes, Route } from "react-router-dom";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={'HomePage'} />
            </Routes>
        </BrowserRouter>
    );
}
export { AppRouter }