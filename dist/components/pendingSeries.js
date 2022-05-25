/* eslint-disable no-unused-vars */
import { series } from '../model/series.js';
import { Component } from './components.js';
export class PendingSerie extends Component {
    constructor(selector) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
    }
    createTemplate() {
        let arr = series.filter((item) => item.watched !== true);
        let html = `
        
        `;
        html += `
        <ul class="series-list">
        
        `;
        arr.forEach((item) => {
            html += `
        <li class="serie">
                                <img
                                    class="serie__poster"
                                    src=${item.poster}
                                    alt="${item.name}"
                                />
                                <h4 class="serie__title">${item.name}</h4>
                                <p class="serie__info">${item.creator}(${item.year})</p>
                                <ul class="score">

                                `;
            html += `<li class="score__star">
                                        <i
                                            class="icon--score fas fa-star"
                                            title="1/5"
                                        ></i>
                                    </li>
                                    <li class="score__star">
                                        <i
                                            class="icon--score fas fa-star"
                                            title="2/5"
                                        ></i>
                                    </li>
                                    <li class="score__star">
                                        <i
                                            class="icon--score fas fa-star"
                                            title="3/5"
                                        ></i>
                                    </li>
                                    <li class="score__star">
                                        <i
                                            class="icon--score fas fa-star"
                                            title="4/5"
                                        ></i>
                                    </li>
                                    <li class="score__star">
                                        <i
                                            class="icon--score fas fa-star"
                                            title="5/5"
                                        ></i>
                                    </li>
                                </ul>

                                `;
            html += `
                                <i class="fas fa-times-circle icon--delete"></i>
                            </li>
        `;
        });
        html += `
         </ul>`;
        return html;
    }
}
