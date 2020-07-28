var app = angular.module('app' , []);
app.controller("mainCtrl" , function($http,$scope)
{
    $scope.getTodo=function()
    {
      $http.get("/todos").then(function (res)
      {
        console.log(res);
       $scope.todos=res.data.todos;

                
       })

    } 
    $scope.getTodo();
         

   
    $scope.addTodo=function(todo)
    {
        
        $http.post('/todos/',todo).then(function(res)
        {
             
            console.log(res)
            $scope.todo=res.data.todos;
            $scope.getTodo();
           
          $scope.todos.push(todo);
          
            //$scope.todo=null;
        })
        
    };
    
    $scope.removeItem = function(todo){
      $http.delete('/todos/'+ todo.id).then(function (res){
         console.log(res);
         $scope.getTodo();
      })
  }
    $scope.updateTodos=function(todo)
    {
      $http.put('todos/:id' +todo.id).then(function(res)
      {
        console.log(res);
        $scope.todo = todoList.find(todo => todo.id === req.params.id);
      })
    }
    /*$scope.deleteTodo=function(todo)
    {
      console.log("hello")
        
        $http.delete('/todos/:id' + todo.id).then(function(res)
        {
             console.log(res);
              
              $scope.getTodo();
          
           
          //$scope.todos.push(todo);
          //  $scope.todo=res.data.todos;
        })
        
    }*/
  }
);
