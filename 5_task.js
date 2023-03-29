console.log('--- 5 задание ---');

class Function {
    isInclude = false;
    setOn() {
        this.isInclude = true;
    }

    setOff() {
        this.isInclude = false;
    }
}

class ElectricalAppliances extends Function {
    constructor(name, model, col, weight, voltage, power) {
        super();
        this.name_device = name;
        this.model_device = model;
        this.color = col;
        this.weight_kg = weight;
        this.voltage_V = voltage;
        this.power_Vt = power;
    }

    print() {
        console.log(
            'Электроприбор, включенный в розетку: ' + '\n'
            + '\t Тип: ' + this.name_device + '\n'
            + '\t Модель: ' + this.model_device + '\n'
            + '\t Цвет: ' + this.color + '\n'
            + '\t Вес: ' + this.weight_kg + ' kg' + '\n'
            + '\t Напряжение: ' + this.voltage_V + ' V' + '\n'
            + '\t Мощность: ' + this.power_Vt + ' Vt' + '\n'
        );

    }
}

function function_summ(objectPower) {
    let summPower = 0;
    for (let key in objectPower) {
        if (objectPower[key].isInclude) {
            objectPower[key].print();
            summPower += objectPower[key].power_Vt;
        }
    }

    console.log('Потребляемая мощность за час: ' + summPower / 1000 + ' кВт*ч');
}

let objectPower = [];
obj.teapot = new ElectricalAppliances('Чайник', 'Mi Smart Kettle Pro', 'белый', 1.3, '220', 1800);
obj.refrigerator = new ElectricalAppliances('Холодильник', 'Bosch Serie 4 VitaFresh', 'черный', 71.48, '220', 200);
obj.washing_machine = new ElectricalAppliances('Стиральная машина', 'Hotpoint-Ariston BK RD 7229 ST K', 'серый', 63.3, '220-240', 1800);

obj.teapot.setOn();
obj.refrigerator.setOn();
function_summ(obj);

console.log('--- ---');
