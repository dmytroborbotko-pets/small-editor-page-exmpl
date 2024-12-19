import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { EditorPage } from "./pages/editor-page";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <EditorPage />
  </Provider>
);
