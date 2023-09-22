function fig(input){
    let figType = input[0];
    if(figType === "square"){
        let a = Number(input[1]);
        let area = a * a;
        console.log(area.toFixed(3));
    }
    else if(figType === "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = a*b;
        console.log(area.toFixed(3));
    }
    else if(figType === "circle"){
        let r = Number(input[1]);
        let area = r*r*Math.PI;
        console.log(area.toFixed(3));
    }
    else if(figType === "triangle"){
        let a = Number(input[1]);
        let ha = Number(input[2]);
        let area = (a*ha)/2;
        console.log(area.toFixed(3));
    }
}

fig(["circle","5"])