app.component('product-display', {
    template:
    /*html*/
    ` <div class="header">
    <h1>{{ header }}</h1>
    <button v-if="editing" class="btn-cancel" @click="doEdit(false)">
        Cancel
    </button>
    <button v-else class="btn btn-primary" @click="doEdit(true)">
        Add Item
    </button>
    </div>

    <form 
        class="add-item-form"
        v-if="editing"
        v-on:submit.prevent="saveItem">

        <input type="text" 
            v-model="newItem" 
            //v-on:keyup.enter="saveItem" 
            placeholder="Add new Item">

        <label>
            <input type="checkbox" 
            v-model="newItemHighPriority">
            High Priority
        </label>

        <button
            v-bind:disabled="newItem.length === 0"
            class="btn btn-primary">
            Save Item
        </button>

    </form>
    <br/>
    <ul>
        <li 
            v-for="item in items" 
            :key="item.id"
            @click="togglePurchased(item)"
            :class="{strikeout: item.purchased, priority: item.highPriority}"
            >{{item.label}}
        </li>
    </ul>
    <p v-if="items.length === 0">Add items in your list</p>`,
    data() {
        return {
            header: "Shopping List App",
            items: [
                {id: 1, label: 'Fruit', purchased: true, highPriority: false},
                {id: 2, label: 'Milk', purchased: true, highPriority: false},
                {id: 3, label: 'Yogurt', purchased: false, highPriority: true},
            ],
            newItem: "",
            newItemHighPriority: false,
            editing: false,
            
        }
    },
    methods: {
        saveItem() {
            this.items.push({
                id:this.items.length + 1, 
                label: this.newItem,
                highPriority: this.newItemHighPriority
        })
            this.newItem = ""
            this.newItemHighPriority = ""
        },
            doEdit(editing) {
                this.editing = editing
                this.newItem = ""
                this.newItemHighPriority = ""
            },
            togglePurchased(item) {
                item.purchased = !item.purchased
            }
            
        }
})