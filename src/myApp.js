import {LitElement,html} from 'lit-element';
import './hellowWord';

class MyApp extends LitElement { 

    static get properties(){
        return{
            list:{type:Array},
            chargedList:{type:Array}
        }
    }
    constructor(){
        super();
        this.list = [];
        this.chargedList = [
            {
                id:1, 
                name:'Your Name',
                year:2018
            },
            {
                id:2,
                name:"El gigante de hierro",
                year:1995
            },
            {
                id:3,
                name:"Contacto sangriento",
                year:1985
            },
            {
                id:4,
                name:"Spirit",
                year:2001
            },
            {
                id:5,
                name: "101 Dalmatas",
                year:1997
            }
        ];
    }
    render(){
        return html`<div>Hola mundo2</div>
                    <button @click=${this._createList}>Create list</button>
                    <button @click=${this._removeList}>Remove list</button>
                    <hellow-word list=${JSON.stringify(this.list)}></hellow-word>
        `;
    }
    _createList(){
        this.list = this.chargedList;
        console.log(list);
    }
    _removeList(){
        this.list = [];
    }
}
customElements.define('my-app',MyApp);