const navi = document.querySelector("nav");

const aMenu = document.querySelector("div#collapse>a");
let openMenu = false; // le menu sera ferme par default ; 

let ulMenu = document.querySelector("nav>div#collapse>ul"); 

aMenu.addEventListener("click", () =>{
    let temMenu = ulMenu; 
    let childs = temMenu.children; 
    if(!openMenu){ // le menu viend d'etre ouvert 
        console.log('OPEN menu mobile ');
        Array.from(childs).forEach(child => {
            child.style.display="block"; 
            child.style.width="100%"; 
        });
        temMenu.style.display="flex";
        temMenu.style.flexDirection="column";  
        openMenu=true;
        navi.style.flexWrap="wrap";
        navi.appendChild(temMenu);
    }else{ // on referme le menu 
        if(document.body.clientWidth < 760){ 
            navi.children[1].appendChild(temMenu);
            ulMenu.style.display="none";
        }else{
            console.log('CLOSE MENU MOBILE >> ELSE WIDTH >> 760');
            console.log(navi.children); 

            navi.children[1].appendChild(temMenu);
            ulMenu.style.display="flex";
        }


        ulMenu.style.flexDirection="row";

        // navi.removeChild(temMenu);
        navi.style.flexWrap="nowrap";
        openMenu=false;
    }
});

window.addEventListener("resize", () =>{
    if(document.body.clientWidth < 760){ 
        navi.children[1].appendChild(ulMenu);
        ulMenu.style.display="none";
    }else{
        navi.style.flexWrap="nowrap";
        ulMenu.style.display="flex";
        ulMenu.style.flexDirection="row";
    }

})