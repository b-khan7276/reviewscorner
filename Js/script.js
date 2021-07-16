$(window).on('load',function () {
    $("#isotope-container").isotope({
      
});
       
    $("#isotope-filters").on('click','button' ,function( ){
        
        var filterValue =$(this).attr('data-filter');
        
         $("#isotope-container").isotope({
             filter : filterValue 
      
});
         $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
    
});

$(window).on('load',function () {
    $("#isotope-container").isotope({
      
});
       
    $("#isotope-filters").on('click','button' ,function( ){
        
        var filterValue =$(this).attr('data-filter');
        
         $("#isotope-container").isotope({
             filter : filterValue 
      
});
         $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
    
});