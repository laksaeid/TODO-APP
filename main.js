import './src/styles/style.css';
import App from './src/app';
import { Modal, Overlay } from './src/screens';
import { page, render, getItems } from './src/library';
const root = document.getElementById('app');
root.append(App(), Modal(), Overlay());
getItems(page.currentPage, page.rpp).then((res) => render(res));