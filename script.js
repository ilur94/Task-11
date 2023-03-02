    function Car(mName, mYear){
        this.name = mName;
        this.year = mYear;
        this.getCarInfo = function(){
             document.write("მოდელი: " + this.name + " წელი: " + this.year + "<br/>");
    };
};
    function User(pName, pAge) {
            this.name = pName;
            this.age = pAge;
            this.driveCar = function(car){
                document.write(this.name + " ატარებს მანქანას მარკით " + car.name + "<br/>");
        };
            this.displayInfo = function(){
            
            document.write("სახელი: " + this.name + "; ასაკი: " + this.age + "<br/>");
        };
};
 
    const tom = new User("ტომი", 24);
    tom.displayInfo();
    const Tesla = new Car("Tesla Model S", 2015);
    tom.driveCar(Tesla);