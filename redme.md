set FLASK_APP=main.py

$env:FLASK_APP = "main" 

flask run
http://127.0.0.1:5000/graphql



==================================
database

python
>>from main import db
>>> db.create_all()
> >>> from datetime import datetime
>>> from api.models import Todo
>>> today = datetime.today().date()
>>> todo = Todo(description="Run a marathon", due_date=today, completed=False)
>>> todo.to_dict()
{'id': None, 'completed': False, 'description': 'Run a marathon', 'due_date': '2020-10-22'}
>>> db.session.add(todo)
>>> db.session.commit()


1]]]]----------------------- fetch all
query fetchAllTodos {
  todos {
    success
    errors
    todos {
      description
      completed
      id
    }
  }
}

2]------------------------- fetch perticular id
query fetchTodo {
  todo(todoId: "1") {
    success
    errors
    todo { id completed description dueDate }
  }
}

3]----------------------------- new data insert

mutation newTodo {
  createTodo(description:"Go to the dentist", dueDate:"24-10-2020") {
    success
    errors
    todo {
      id
      completed
      description
    }
  }
}

4]]]--------------------------- find data
mutation markDone {
  markDone(todoId: "1") {
    success
    errors
    todo { id completed description dueDate }
  }
}

5]]]]]]]]-------------------------- delete data
mutation {
  deleteTodo(todoId: "1") {
    success
    errors
  }
}

6]]]---------------------- update data
mutation updateDueDate {
  updateDueDate(todoId: "2", newDate: "25-10-2020") {
    success
    errors
  }
}

7]]----------------------------
