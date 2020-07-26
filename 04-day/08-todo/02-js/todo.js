Vue.component("todo", {
    template: `
        <div>
            <h3>代办事项列表</h3>
            <todo-add></todo-add>
            <todo-list></todo-list>
        </div>
    `,
    components: {todoAdd, todoList}
})