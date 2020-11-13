const svg = d3.selectAll('svg')
const lattes = d3.select('#my2')

svg
    .attr('fill','#444')
    .attr('width','2rem')
    .on('mouseover', function(){
        d3.select(this)
            .attr('fill','#BD3D38')
    })
    .on('mouseout', function(){
        d3.select(this)
            .attr('fill','#444')
    })

lattes
    .style('color','#444')
    .on('mouseover', function(){
        d3.select(this)
            .style('color','#BD3D38')
    })
    .on('mouseout', function(){
        d3.select(this)
            .style('color','#444')
    })

