// this is your custom javascript code
const map = d3.select("body").append("svg");
map.attr('viewbox', '0 0 720 360')
    .attr('width', '720')
    .attr('height', '360');

map.selectAll('rect')
    .data(cities)
    .enter()
    .append('rect')
    .attr('x', (d) => (~~d.longitude + 180)*2)
    .attr('y', (d) => (90-~~d.latitude)*2)
    .attr('width', 3)
    .attr('height', 3)
    .attr('rx', 0)
    .attr('ry', 0)
    .style('fill', 'rgb(255,0,0)')


d3.select('body').append('button')
    .text('RECT')
    .on('click',() => {
        map.selectAll("circle").remove();
        map.selectAll("rect").remove();
        map.selectAll("rect")
            .data(cities)
            .enter()
            .append('rect')
            .attr('x', (d) => (~~d.longitude + 180)*2)
            .attr('y', (d) => (90-~~d.latitude)*2)
            .attr('width', 3)
            .attr('height', 3)
            .attr('rx', 0)
            .attr('ry', 0)
            .style('fill', 'rgb(255,0,0)');
    });

d3.select('body').append('button')
    .text('CIRCLE')
    .on('click',() => {
        map.selectAll("rect").remove();
        map.selectAll("circle").remove();
        map.selectAll('cicle')
            .data(cities)
            .enter()
            .append('circle')
            .attr('cx', (d) => (~~d.longitude + 180)*2)
            .attr('cy', (d) => (90-~~d.latitude)*2)
            .attr('r', .5)
            .style('fill', 'rgb(255,99,71)');
    });









