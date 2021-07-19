document.write('Hello World SK!')

const divCont = document.createElement('div');
divCont.textContent = 'Hello JH'
document.body.append(divCont);


const tabEvt = {
    init : function(menu,cont){
        menu.forEach(function(a){
            a.classList.remove('active');
        })
        cont.forEach(function(a){
            a.style.display = 'none';
        });
    },
    click : function(menu,cont){
        _this = this;
        menu.forEach(function(i,v,e){                        
            i.addEventListener('click',function(){
                _this.init(menu,cont);
                this.classList.add('active');
                cont[v].style.display = 'block';
                
            });
        });
    }
}
const tabMenu = document.querySelectorAll('.tab-menu a');
const tabCont = document.querySelectorAll('.tab-wrap .tab-cont');
tabEvt.click(tabMenu,tabCont);