import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TrheeaNDP } from "./routes/3aNDP.tsx";
import { FouraF } from "./routes/4aF.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <TrheeaNDP /> },
			{ path: "/inventario=1", element: <FouraF /> },
			{ path: "/inventario=2", element: <FiveaETP /> },
			{ path: "/inventario=3", element: <SixaETP /> },
			{ path: "/inventario=4", element: <EightaETP /> },
		],
	},
]);

import { ItemsProvider } from "./context/ItemsContext.tsx";
import { FiveaETP } from "./routes/5aETP.tsx";
import { SixaETP } from "./routes/6aETP.tsx";
import { EightaETP } from "./routes/8aQOV.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ItemsProvider>
			<RouterProvider router={router} />
		</ItemsProvider>
	</React.StrictMode>,
);
