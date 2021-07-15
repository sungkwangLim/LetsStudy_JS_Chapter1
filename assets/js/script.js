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
function 알림창열기(구멍,구멍2){
    document.querySelector('.alert-box').style.display = 구멍;
    document.querySelector('.alert-box > p').innerHTML = 구멍2;
}

// 파라메터값 넣는거 배우면서 아래 코드는 중복코드라 주석처리
// function 알림창닫기(){
//     document.querySelector('.alert-box').style.display = 'none'
// }

/* 
 20210714 코딩애플4강 숙제 -> html은 냅두고 버튼1, 버튼2 눌렀을때 파라메터값을 이용해서
 '아이디를 입력안하셨어요'
 '비번을 입력안하셨어요'
 라고 텍스트 표시하게 만들기
*/

//이벤트 리스너 배우기
document.getElementById('close').addEventListener('click',function(){
    알림창열기('none');
});

//제이쿼리는 바디태그 끝나는 곳 전에 넣는게 낫다.
$('#jqueryTest').addClass('yellow-bg');