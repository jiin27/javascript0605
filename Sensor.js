/*우리가 개발한 collisionCheck() 함수는 매개 변수로 인스턴스를 원한다. 
-> 인스턴스는 x, y, width, height 를 가질 수 있는 단위이기 때문에. 
-> 센서 역시 인스턴스화 시켜 x, y, width, height 를 보유하게 하자.
*/

//모든 '센서'들의 최상위 클래스를 정의한 것.
class Sensor{
    constructor(container, width, height, x, y){
        this.container=container;
        this.div;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;

        this.div=document.createElement("div");
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.background="red";
        this.div.style.position="absolute"; //wrapper의 자식
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        this.container.appendChild(this.div);

    }
}