Vue.component('app', {
  template: `
    <div>
	   <input type="text" v-model="newTodo">
	   <button @click="addTodo">Add todo</button>
	   <ul>
		  <li 
		  v-for="(todo, index) in todos" 
		  is="todo-item" 
		  :class={complete:todo.complete} 
		  v-bind:title="todo.title" 
		  v-on:remove="todos.splice(index, 1)" 
		  v-on:done="toggleTodo(todo)">
		  </li>
	  </ul>
  </div>`,

  data(){
  	return {
  		newTodo: "",

		todos: [{
			title: 'learn vue',
			complete: false
		}, {
			title: 'build vue app',
			complete: false
		}]		
  	}  	
  },

  methods: {
		addTodo(){
			this.todos.push({
				title: this.newTodo,
				complete: false
			});
			this.newTodo = '';
		},

		toggleTodo(todo){
			todo.complete = !todo.complete;
		}
	} 	
})

new Vue({
		el: '#app',
		
		data : {
		},

		methods: {
		},

		mounted(){
			console.log("Mounted !");
		}
	})