import {LitElement,html} from 'lit-element';
class MyList extends LitElement { 

    constructor(){
        super();
    }
    static get properties(){
        return{
            title:{type:String},
            list:{type:Array}
        }
    }
    render(){
        return html`<div>
                        <h1>${this.title}</h1>
                        <ul>
                        ${this.list.length !== 0 ? this.list.map(el=>html`<li>${el.name}</li>`) : 'No hay datos'}
                        </ul>
                    </div>`;
    }
}
customElements.define('my-list',MyList);