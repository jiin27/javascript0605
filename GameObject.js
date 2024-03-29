/* 게임의 등장하는 모든 객체들의 최상위 클래스 */
class GameObject{
    constructor(container, src, width, height, x, y, velX, velY){
        this.container=container; //객체가 붙여질 부모요소
        this.img;
        this.src=src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;

        //객체의 스타일 정의
        this.img=document.createElement("img");
        this.img.src=this.src;
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.container.appendChild(this.img);
    }

    //가장 보편적인 기능을 정의해 놓고, 상속받는 자식이 이 설정이 자신의 상황에 맞지 않을 경우
    //부모의 메서드를 그대로 사용하지 않고, 자신만의 코드로 변경시킬 수 있는데 이러한 메서드 정의를 가리켜
    //오버라이딩(Overriding)이라고 한다.
    // *주의* 오버라이딩 시 반드시 부모의 메서드명과 동일해야 한다. 그래야 업그레이드. 다른 명이라면 아예 새로운 메서드로 인식됨.

    //물리적 변화를 적용한다.
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;
    }

    //그래픽적으로 화면을 처리한다.
    render(){ 
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}