import './src/styles/style.css';
import App from './src/app';
import { Modal, Overlay } from './src/screens';
import { render, tasks } from './src/library';

const root = document.getElementById('app');
root.append(App(),Modal(),Overlay());
render(tasks)