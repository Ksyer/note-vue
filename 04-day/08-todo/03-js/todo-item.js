var todoItem = {
    props: ["t", "i"],
    template: `
            <li>{{i}}--{{t.name}}--{{t.do}}<a href="javascript:;">×</a></li>
    `
}