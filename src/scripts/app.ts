import { PendingSerie } from '../components/pendingSeries.js';
import { WatchedSeries } from '../components/watchedSeries.js';

(() => {
    document.addEventListener('DOMContentLoaded', app);
})();

function app() {
    new PendingSerie('.series-list');
    new WatchedSeries('section.series-watched > ul');
}
