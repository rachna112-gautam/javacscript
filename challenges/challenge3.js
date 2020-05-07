class Element {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
  
}

class Parks extends Element {
    constructor(name, year, area, numOfTree)
    {
        super(name, year);
        this.area = area;
        this.numOfTree = numOfTree;
    }

    density() {
        var d = this.numOfTree / this.area;
        console.log(`${this.name}, has a density of ${d} tree per square km.`);
        }
}

class Street extends Parks {
    constructor(name,year, length, size = 3)
    {
        super(name,year);
        this.length = length;
        this.size = size;
    }

    classifySize() { 
        const classify = new Map();
        classify.set(1, 'tiny');
        classify.set(2, 'small');
        classify.set(3, 'normal');
        classify.set(4, 'big');
        classify.set(1, 'huge');
        console.log(`${this.name},  build in ${year}, ia a ${classify.get(this.size)} street.`);
    }

}

const allParks = [new Parks('green park',1986, 0.2,948),
new Parks('national park', 1898, 3.4, 65376),
new Parks('oak park',1838, 0.5, 974)];

const allStreet = [new Street('ocean avenue', 1990, 1.1 ,4),
new Street('evergreen street', 1983, 1.3 ,2),
new Street('4th street', 1904, 0.8 ),
new Street('sunset boulevard', 1934, 2.3 ,1)
];
function calAr(arr){

    const sum = arr.reduce((prev,cur,index) => prev + cur,0);

    return [sum, sum / arr.length];
}
function parksReport(p){

    console.log("-------PARKS REPORT-----");
    p.forEach(element => {
        element.density();
    });

    const ages = p.Map(el => new Date().getFullYear() - el.year);
    const [totalAge, avgAge] = calAr(ages);
    console.log(`our ${p.length} parks have an average of ${avgAge} years`);

    const i = p.Map(el => el.numOfTree).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 tree.`);


}

function streetReport(){

    console.log("-----STREETS REPORT-----");
    
    const [totalLen, avgLen] = calAr(s.Map(el => el.length));
    console.log(`our ${s.length} street have a total length of ${totalLen} km, with an average length of ${avgLen} km.`);
      
    s.forEach(el => el.classifySize());

}
parksReport(allParks);
streetReport(allStreet);
