$(document).ready(function(){
var gui = new DAT.GUI({
    height : 2 * 32 - 1
});
gui.add(params, 'maxcubes').min(100).max(20000).step(10).name("Max Cubes")
gui.add(params, 'shrink').min(10).max(300).step(0.0025).name("Trail length")
})