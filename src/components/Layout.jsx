import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";

export function Layout() {
    return <>
        <AppBar />
        <Suspense fallback={null}>
            <Outlet/>
        </Suspense>
    </>
}