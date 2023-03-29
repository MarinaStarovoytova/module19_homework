console.log('--- 4 задание ---');

const prototypeElectricalAppliances = {
    name_device: 'name',
    model_device: 'model',
    color: 'color',
    weight_kg: 0,
    voltage_V: 0,
    power_Vt: 0,
    isInclude: false,
    setAttribute: function (name_device, model_device, color, weight_kg, voltage_V, power_Vt) {
        this.name_device = name_device;
        this.model_device = model_device;
        this.color = color;
        this.weight_kg = weight_kg;
        this.voltage_V = voltage_V;
        this.power_Vt = power_Vt;
    },
    print: function () {
        console.log(
            'Электроприбор, включенный в розетку: ' + '\n'
            + '\t Тип: ' + this.name_device + '\n'
            + '\t Модель: ' + this.model_device + '\n'
            + '\t Цвет: ' + this.color + '\n'
            + '\t Вес: ' + this.weight_kg + ' kg' + '\n'
            + '\t Напряжение: ' + this.voltage_V + ' V' + '\n'
            + '\t Мощность: ' + this.power_Vt + ' Vt' + '\n'
        );
    },

    setOnOnclude: function () {
        this.isInclude = true;
    },

    setOffInclude: function () {
        this.isInclude = false;
    }
}

const prototypekVt = {
    getkVt: function (obj) {
        let summPower = 0;
        for (let key in obj) {
            if (obj[key].isInclude) {
                obj[key].print();
                summPower += obj[key].power_Vt;
            }
        }

        console.log('Потребляемая мощность за час: ' + summPower / 1000 + ' кВт*ч');
    }
}

let obj = [];
const obj_kVt = Object.create(prototypekVt);
obj.teapot = Object.create(prototypeElectricalAppliances);
obj.teapot.setAttribute('Чайник', 'Mi Smart Kettle Pro', 'белый', 1.3, '220', 1800);


obj.refrigerator = Object.create(prototypeElectricalAppliances);
obj.refrigerator.setAttribute('Холодильник', 'Bosch Serie 4 VitaFresh', 'черный', 71.48, '220', 200);
obj.refrigerator.setOnOnclude();

obj.washing_machine = Object.create(prototypeElectricalAppliances);
obj.washing_machine.setAttribute('Стиральная машина', 'Hotpoint-Ariston BK RD 7229 ST K', 'серый', 63.3, '220-240', 1800);

obj.teapot.setOnOnclude();
obj.refrigerator.setOnOnclude();
obj.washing_machine.setOffInclude();

obj_kVt.getkVt(obj);


// obj.teapot.setOffInclude();
// obj.refrigerator.setOnOnclude();
// obj.washing_machine.setOffInclude();

// obj_kVt.getkVt(obj);

console.log('--- ---');