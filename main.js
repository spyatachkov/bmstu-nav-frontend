const data = {
    objects: [
        {
            id: 1,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 1",
            isSelected: true,
            type: "aud",
            coordinates: [[52, 270], [93, 305],[151, 305], [151, 364], [137, 364], [52, 342], [17, 311]]
            
        },
        {
            id: 2,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 2",
            isSelected: false,
            type: "aud",
            coordinates: [[92, 224], [123, 252], [123, 302], [93, 302], [53, 268]]
            
        },
        {
            id: 3,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 3",
            isSelected: false,
            type: "aud",
            coordinates: [[137, 169], [168, 197], [124, 249], [93, 223]],
            
        },
        {
            id: 4,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 4",
            isSelected: false,
            type: "aud",
            coordinates: [[179, 122], [208, 148], [208, 178], [185, 178], [169, 195], [139, 169]],
            
        },
        {
            id: 5,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 5",
            isSelected: false,
            type: "aud",
            coordinates: [[218, 76], [254, 109], [254, 178], [210, 178], [210, 147], [180, 120]],
            
        },
        {
            id: 6,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 6",
            isSelected: false,
            type: "aud",
            coordinates: [[218, 76], [254, 109], [254, 178], [210, 178], [210, 147], [180, 120]],
            
        },
        {
            id: 7,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 7",
            isSelected: false,
            type: "aud",
            coordinates: [[256, 111], [307, 156], [307, 178], [256, 178]],
            
        },
        {
            id: 8,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 8",
            isSelected: false,
            type: "aud",
            coordinates: [[388, 117], [393, 117], [431, 108], [431, 178], [388, 178]],
            
        },
        {
            id: 9,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 9",
            isSelected: false,
            type: "aud",
            coordinates: [[433, 108], [477, 98], [477, 178], [433, 178]],
            
        },
        {
            id: 10,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 10",
            isSelected: false,
            type: "aud",
            coordinates: [[479, 97], [519, 89], [519, 178], [479, 178]],
            
        },
        {
            id: 11,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 11",
            isSelected: true,
            type: "aud",
            coordinates: [[522, 88], [560, 79], [560, 178], [522, 178]],
            
        },
        {
            id: 12,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 12",
            isSelected: false,
            type: "aud",
            coordinates: [[562, 79], [622, 66], [662, 178], [562, 178]],
            
        },
        {
            id: 13,
            uuid: "0000-0000-0000-0000-0000",
            title: "Аудитория 13",
            isSelected: false,
            type: "aud",
            coordinates: [[154, 257], [200, 207], [211, 206], [211, 275], [154, 275]]
            
        },
        {
            id: 14,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 1",
            isSelected: true,
            type: "hall",
            coordinates: [[154, 302], [124, 302], [125, 250], [152, 250]]
            
        },
        {
            id: 12,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 2",
            isSelected: true,
            type: "hall",
            coordinates: [[127, 250], [154, 260], [202, 205], [185, 180]]
            
        },
        {
            id: 12,
            uuid: "0000-0000-0000-0000-0001",
            title: "Коридор 3",
            isSelected: true,
            type: "hall",
            coordinates: [[185, 182], [199, 205], [605, 206], [606, 181]]
            
        },
    ]
};

const svg = document.getElementById("svg");

for (object of data.objects) {
    let polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    for (dots of object.coordinates) {
        let point = svg.createSVGPoint();
        point.x = dots[0];
        point.y = dots[1];
        polygon.points.appendItem(point);
    }
    if (object.isSelected) {
        object.type === 'aud' 
        ? polygon.setAttribute("class", "isSelectedAud") 
        : polygon.setAttribute("class", "isSelectedHall");
    }

    polygon.setAttribute("id", object.id);
    svg.appendChild(polygon);
}

