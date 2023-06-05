class Mario extends GameObject {
    //마리오는 이미지를 둘러싼 wrapper와 4개의 센서 막대도 달아야 한다 -> 충돌을 감지할 막대 센서!

    //js에서 개발자가 생성자를 정의하지 않을 경우 js 자체적으로 부모를 먼저 생성해준다.
    //하지만 개발자가 현재 클래스의 생성자를 정의할 경우
    //개발자가 주도하는 것이기 때문에 js에서 부모를 자동 생성해주지 않고 개발자가 부모를 생성하는 것까지 직접 해야 한다.
    constructor(container, src, width, height, x, y, velX, velY) {
        super(container, src, width, height, x, y, velX, velY);

        //부모를 호출한 다음 상속자 '나'에 대한 초기화 설정.
        this.wrapper; //센서들을 감쌀 div
        this.sensorArray = new Array(4); //4개의 센서 막대

        this.wrapper = document.createElement("div");
        this.wrapper.style.width = this.width + "px"; //부모를 호출해 전달한 width -> 즉, '나'의 width인 것.
        this.wrapper.style.height = this.height + "px";
        //바깥쪽 wrapper는 img를 포함하고 있어야 한다.
        //부모인 GameObject에서 img를 stage에 부착했으나, 아래의 appendChild에 의해 부착대상이 wrapper로 자동 변경된다.
        //따라서 별도의 removeChild()는 필요하지 않다.
        this.wrapper.appendChild(this.img);
        this.container.appendChild(this.wrapper);

        //실제적으로 움직일 대상은 wrapper 이므로, wrapper에 포지션이 적용돼야 한다.
        this.wrapper.style.position = "absolute";
        this.wrapper.style.left = this.x + "px";
        this.wrapper.style.top = this.y + "px";

        //생성된 4개의 센서를 sensorArray[]에 넣기. 키보드 순서에 맞춰 배열에 넣기.
        //좌측 센서
        this.sensorArray[0] = new Sensor(this.wrapper, 1, 35, -1, ((this.height - 35) / 2))

        //위쪽 센서
        this.sensorArray[1] = new Sensor(this.wrapper, 35, 1, (this.width - 35) / 2, -1)

        //우측 센서
        this.sensorArray[2] = new Sensor(this.wrapper, 1, 35, this.width, ((this.height - 35) / 2))

        //아래쪽 센서
        this.sensorArray[3] = new Sensor(this.wrapper, 35, 1, (this.width - 35) / 2, this.height)
    }

    setSensor(){
        this.sensorArray[0].x=this.x-1;
        this.sensorArray[1].x=this.x+(this.width - 35) / 2;
        this.sensorArray[2].x=this.x+this.width;
        this.sensorArray[3].x=this.x+(this.width - 35) / 2;

        this.sensorArray[0].y=this.y+((this.height - 35) / 2);
        this.sensorArray[1].y=this.y-1;
        this.sensorArray[2].y=this.y+((this.height - 35) / 2);
        this.sensorArray[3].y=this.y+this.height;
    }

    tick() {
        this.x += this.velX;
        this.y += this.velY;

        //마리오는 자신의 x가 변하면 본인이 보유한 센서의 위치값도 갱신시켜야 한다.
        this.setSensor();
    }

    //부모인 GameObject의 메서드를 마리오에 적용하면 안됨 -> img가 아닌 wrapper, 즉 div를 움직여야 하므로
    //부모의 메서드를 업그레이드해 마리오의 상황에 맞게 코드를 변경한다 = 오버라이딩
    render() {
        this.wrapper.style.left = this.x + "px";
        this.wrapper.style.top = this.y + "px";
    }

}