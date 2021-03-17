import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HeaderComponent } from "./components/header/header.component";
import { VideosPage } from "./pages/videos/videos.page";

export function AppRoutes() {

    return (
        <BrowserRouter>
            <HeaderComponent></HeaderComponent>
            <Switch>
                <Route exact path="/">
                    <VideosPage></VideosPage>
                </Route>
            </Switch>

        </BrowserRouter>
    )
}