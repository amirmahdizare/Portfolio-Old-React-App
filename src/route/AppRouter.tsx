import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout/Layout";

const AppRouter = () => {
    return (
        <Layout >
            <BrowserRouter>
                <Routes>
                    <Route index element={'HomePage'} />
                </Routes>
            </BrowserRouter>
        </Layout>
    );
}
export { AppRouter }