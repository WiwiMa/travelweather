import './styles/main.scss'

import { beepServer } from './js/serverBeeper'
import { postTravelData } from './js/dataPoster'
import { addDataHtml } from './js/dataHtmlAdder'
import { saveItem } from './js/itemSaver'
import { removeItem } from './js/itemRemover'

document.getElementById('submit').addEventListener('click', beepServer);
document.getElementById('save').addEventListener('click', saveItem);
document.getElementById('remove').addEventListener('click', removeItem);

export {
    beepServer,
    postTravelData,
    addDataHtml,
    saveItem,
    removeItem
}