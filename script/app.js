(function () {

  var socket = io.connect();
  $scope.send = function(){
   socket.emit('chat message', $scope.message);
   $scope.message="";
  }
  socket.on('chat message', function(msg){
   var li=document.createElement("li");
   li.appendChild(document.createTextNode(msg));
   document.getElementById("senderArray").appendChild(li);
  });

})();