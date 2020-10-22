import header from './header/index.js';
import { imgWrapper, time } from './photoGenerator/index.js';
import overlay from './preloader/index.js';



const root = document.getElementById('root');
root.appendChild(overlay);
root.appendChild(header);
root.appendChild(time);
root.appendChild(imgWrapper);