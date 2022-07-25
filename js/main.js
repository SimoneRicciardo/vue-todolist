var app = new Vue(
    {
        el: '#app',
        data: {
            newToDo: [
                {
                    text: '',
                    done: false
                }
            ],

            ToDoList: [
                {
                    text: 'compito 1',
                    done: false
                },
                {
                    text: 'compito 2',
                    done: false
                },
                {
                    text: 'compito 3',
                    done: false
                }
            ],
        },
        methods: {
            deleteRow(index){
            this.ToDoList.splice(index, 1);
        },
        addToDo(){
            this.ToDoList.push(this.newToDo);
        }
       }
    }
) 
