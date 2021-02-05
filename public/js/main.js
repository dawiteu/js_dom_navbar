const aMenu = document.querySelector("div#collapse>a");
let openMenu = false; // le menu sera ferme par default ; 



aMenu.addEventListener("click", () =>{
    //alert('open menu');
        let ulMenu = document.querySelector("nav>div#collapse>ul"); 
        let childs = ulMenu.children; 
    if(!openMenu){
        Array.from(childs).forEach(child => {
            child.style.display="block"; 
            child.style.width="100%"; 
        });
        ulMenu.style.display="flex";
        ulMenu.style.flexDirection="column";  
        openMenu=true;
    }else{
        Array.from(childs).forEach(child => {
            child.style.display="none"; 
           // child.style.width="100%"; 
        });
        ulMenu.style.display="none"; 
        openMenu=false;
    }

});