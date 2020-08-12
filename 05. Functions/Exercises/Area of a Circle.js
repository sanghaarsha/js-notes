circle = {
    radius: 2,
    get area() {
        return Math.PI * this.radius * this.radius;
    },
};
console.log(circle.area);

circle.radius = 4;
circle.area = 9;
console.log(circle.area);

// As we have get method for area it can't be changed
// while radius is changeable
