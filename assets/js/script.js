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

//html을 먼저 불러오고 js를 실행해야 버그가 안생김
//js 선택자를 잘 보고 컨트롤해야함
//Chrome 개발자 모드 콘솔창에서 버그 찾고 수정하는 방법 익숙해지기
function 알림창열기(){
    document.querySelector('.alert-box').style.display = 'block'
}

function 알림창닫기(){
    document.querySelector('.alert-box').style.display = 'none'
}