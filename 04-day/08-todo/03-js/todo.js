Vue.component("todo", {
    data() {
        return {
            tasks: [
                {name: "然哥", do: "学习"},
                {name: "东哥", do: "吃饭"},
                {name: "亮哥", do: "睡觉"}
            ]
        }
    },
    template: `
        <div>
            <h3>代办事项列表</h3>
            <todo-add></todo-add>
            <todo-list :tasks="tasks"></todo-list>
        </div>
    `,
    components: {todoAdd, todoList}
})