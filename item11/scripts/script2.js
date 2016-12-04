var test1 = function() {

  var param = "bbb";
  var test2 = function() {
      var param = "aaa";
      console.log(param);
  };
  test2();
  console.log(param);
};

test1();