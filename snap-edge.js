app.directive('snapLimit', [function () {
    return {
        restrict: 'AE',
        scope:
        {
            threshold : '=',
            align : "=",
            debug : "="
        },
        link: function (scope, elem, attr) {
         
         log(attr.debug);
         if(attr.align=="left")
         {
          elem.css('position','fixed');
          elem.css('width',attr.threshold+"px");
          elem.css('height','1000px');
          elem.css('z-index','99999');
          if(attr.debug=="true")            
            elem.css('background','green');

         }else if(attr.align =="right")
         {
          elem.css('position','fixed');
          elem.css('width',attr.threshold+"px");
          elem.css('height','1000px');
          elem.css('z-index','99999');
          elem.css('right',0);
          if(attr.debug=="true")            
            elem.css('background','blue');

         }
         else
         {
           elem.css('position','fixed');
          elem.css('width',attr.threshold+"px");
          elem.css('height','1000px');
          elem.css('z-index','99999');
          if(attr.debug=="true")            
            elem.css('background','green');

         }




        }
    };
}])
